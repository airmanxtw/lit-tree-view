import { LitElement, css, html, nothing } from 'lit'

/**
 * A tree-view dropdown web component.
 *
 * @property {Array} depts - Array of { deptno, deptname, parentno }
 * @fires dept-selected - When a node is selected. detail: { deptno, deptname, parentno }
 * @csspart trigger - The dropdown trigger button
 * @csspart panel  - The dropdown panel
 */
export class DeptTreeView extends LitElement {
  static get properties() {
    return {
      depts: { attribute: false },
      _open: { state: true },
      _selected: { state: true },
      _expanded: { state: true },
    }
  }

  constructor() {
    super()
    this.depts = []
    this._open = false
    this._selected = null
    this._expanded = new Set()
    this._onDocClick = this._onDocClick.bind(this)
  }

  // ── Lifecycle ────────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this._onDocClick)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('click', this._onDocClick)
  }

  willUpdate(changed) {
    if (changed.has('depts')) {
      // Reset expanded state when data changes; auto-expand first level
      this._expanded = new Set()
      this._buildFirstLevelExpansion()
    }
  }

  // ── Tree building ────────────────────────────────────────────────────────

  _buildTree() {
    const map = new Map()
    const roots = []

    // Build node map
    for (const d of this.depts) {
      map.set(d.deptno, { ...d, children: [] })
    }

    // Assign children
    for (const node of map.values()) {
      if (!node.parentno) {
        roots.push(node)
      } else {
        const parent = map.get(node.parentno)
        if (parent) {
          parent.children.push(node)
        } else {
          // Orphan node: treat as root
          roots.push(node)
        }
      }
    }

    return roots
  }

  _buildFirstLevelExpansion() {
    // Expand root nodes so their direct children are visible
    for (const d of this.depts) {
      if (!d.parentno) {
        this._expanded = new Set([...this._expanded, d.deptno])
      }
    }
  }

  // ── Event handlers ───────────────────────────────────────────────────────

  _onDocClick(e) {
    if (!this._open) return
    if (!e.composedPath().includes(this)) {
      this._open = false
    }
  }

  _onTriggerClick(e) {
    e.stopPropagation()
    this._open = !this._open
  }

  _onNodeClick(e, node) {
    e.stopPropagation()

    // Toggle expand/collapse for parent nodes
    if (node.children.length > 0) {
      const next = new Set(this._expanded)
      if (next.has(node.deptno)) {
        next.delete(node.deptno)
      } else {
        next.add(node.deptno)
      }
      this._expanded = next
    }

    // Always select the clicked node
    this._selected = node
    this.dispatchEvent(
      new CustomEvent('dept-selected', {
        detail: { deptno: node.deptno, deptname: node.deptname, parentno: node.parentno },
        bubbles: true,
        composed: true,
      })
    )

    // Close panel only when selecting a leaf node
    if (node.children.length === 0) {
      this._open = false
    }
  }

  // ── Rendering ────────────────────────────────────────────────────────────

  _renderNode(node, level = 0) {
    const isExpanded = this._expanded.has(node.deptno)
    const hasChildren = node.children.length > 0
    const isSelected = this._selected?.deptno === node.deptno

    return html`
      <li class="tree-node" role="none">
        <button
          type="button"
          class="node-btn ${isSelected ? 'selected' : ''}"
          style="--level: ${level};"
          role="treeitem"
          aria-expanded=${hasChildren ? String(isExpanded) : nothing}
          aria-selected=${String(isSelected)}
          @click=${(e) => this._onNodeClick(e, node)}
        >
          <span class="node-icon" aria-hidden="true">
            ${hasChildren
              ? html`<svg viewBox="0 0 10 10" width="10" height="10" class="chevron ${isExpanded ? 'open' : ''}">
                  <path d="M2 3 L5 7 L8 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`
              : html`<span class="leaf-dot"></span>`}
          </span>
          <span class="node-label">${node.deptname}</span>
        </button>
        ${hasChildren && isExpanded
          ? html`<ul role="group" class="subtree">
              ${node.children.map((child) => this._renderNode(child, level + 1))}
            </ul>`
          : nothing}
      </li>
    `
  }

  render() {
    const roots = this._buildTree()
    const label = this._selected ? this._selected.deptname : '請選擇單位'

    return html`
      <div class="wrapper">
        <button
          type="button"
          class="trigger ${this._open ? 'open' : ''}"
          part="trigger"
          aria-haspopup="tree"
          aria-expanded=${String(this._open)}
          @click=${this._onTriggerClick}
        >
          <span class="trigger-label ${this._selected ? '' : 'placeholder'}">${label}</span>
          <svg class="trigger-arrow ${this._open ? 'open' : ''}" viewBox="0 0 10 10" width="12" height="12" aria-hidden="true">
            <path d="M2 3 L5 7 L8 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        ${this._open
          ? html`<div class="panel" part="panel" role="tree" aria-label="部門選擇">
              <ul class="tree-root" role="group">
                ${roots.map((node) => this._renderNode(node, 0))}
              </ul>
            </div>`
          : nothing}
      </div>
    `
  }

  // ── Styles ───────────────────────────────────────────────────────────────

  static get styles() {
    return css`
      :host {
        --dtv-bg: #ffffff;
        --dtv-border: #d1d5db;
        --dtv-text: #111827;
        --dtv-placeholder: #9ca3af;
        --dtv-hover-bg: #f3f4f6;
        --dtv-selected-bg: #ede9fe;
        --dtv-selected-text: #5b21b6;
        --dtv-selected-border: #7c3aed;
        --dtv-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        --dtv-radius: 6px;
        --dtv-indent: 20px;

        display: inline-block;
        font-family: system-ui, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        position: relative;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --dtv-bg: #1f2028;
          --dtv-border: #3f4150;
          --dtv-text: #f3f4f6;
          --dtv-placeholder: #6b7280;
          --dtv-hover-bg: #2e303a;
          --dtv-selected-bg: #3b2f5e;
          --dtv-selected-text: #c4b5fd;
          --dtv-selected-border: #7c3aed;
          --dtv-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
      }

      /* ── Trigger ── */
      .wrapper {
        position: relative;
      }

      .trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        min-width: 220px;
        padding: 8px 12px;
        background: var(--dtv-bg);
        color: var(--dtv-text);
        border: 1px solid var(--dtv-border);
        border-radius: var(--dtv-radius);
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
        transition: border-color 0.2s, box-shadow 0.2s;
        text-align: left;
      }

      .trigger:hover,
      .trigger.open {
        border-color: var(--dtv-selected-border);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--dtv-selected-border) 25%, transparent);
      }

      .trigger:focus-visible {
        outline: 2px solid var(--dtv-selected-border);
        outline-offset: 2px;
      }

      .trigger-label {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .trigger-label.placeholder {
        color: var(--dtv-placeholder);
      }

      .trigger-arrow {
        flex-shrink: 0;
        color: var(--dtv-placeholder);
        transition: transform 0.2s;
      }

      .trigger-arrow.open {
        transform: rotate(180deg);
      }

      /* ── Panel ── */
      .panel {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        min-width: 100%;
        max-height: 320px;
        overflow-y: auto;
        background: var(--dtv-bg);
        border: 1px solid var(--dtv-border);
        border-radius: var(--dtv-radius);
        box-shadow: var(--dtv-shadow);
        z-index: 100;
        padding: 4px 0;
        scrollbar-width: thin;
      }

      .panel::-webkit-scrollbar {
        width: 6px;
      }

      .panel::-webkit-scrollbar-thumb {
        background: var(--dtv-border);
        border-radius: 3px;
      }

      /* ── Tree ── */
      .tree-root,
      .subtree {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .tree-node {
        margin: 0;
      }

      .node-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 12px 6px calc(12px + var(--level) * var(--dtv-indent));
        background: none;
        border: none;
        color: var(--dtv-text);
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        text-align: left;
        border-radius: 0;
        transition: background 0.15s;
      }

      .node-btn:hover {
        background: var(--dtv-hover-bg);
      }

      .node-btn.selected {
        background: var(--dtv-selected-bg);
        color: var(--dtv-selected-text);
        font-weight: 500;
      }

      .node-btn:focus-visible {
        outline: 2px solid var(--dtv-selected-border);
        outline-offset: -2px;
      }

      /* ── Icons ── */
      .node-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        flex-shrink: 0;
        color: var(--dtv-placeholder);
      }

      .node-btn.selected .node-icon {
        color: var(--dtv-selected-text);
      }

      .chevron {
        transition: transform 0.2s;
        display: block;
      }

      .chevron.open {
        transform: rotate(180deg);
      }

      .leaf-dot {
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: currentColor;
        margin: auto;
        opacity: 0.4;
      }

      .node-label {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `
  }
}

window.customElements.define('dept-tree-view', DeptTreeView)
