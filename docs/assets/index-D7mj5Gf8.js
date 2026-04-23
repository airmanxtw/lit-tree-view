(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,b=e=>e,x=y.trustedTypes,S=x?x.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,C=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,T=`?`+w,E=`<${T}>`,D=document,O=()=>D.createComment(``),k=e=>e===null||typeof e!=`object`&&typeof e!=`function`,A=Array.isArray,ae=e=>A(e)||typeof e?.[Symbol.iterator]==`function`,j=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,F=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),I=/'/g,L=/"/g,R=/^(?:script|style|textarea|title)$/i,z=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),B=Symbol.for(`lit-noChange`),V=Symbol.for(`lit-nothing`),H=new WeakMap,U=D.createTreeWalker(D,129);function W(e,t){if(!A(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return S===void 0?t:S.createHTML(t)}var oe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=M;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===M?c[1]===`!--`?o=N:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=F):(R.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=F):o=P:o===F?c[0]===`>`?(o=i??M,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?F:c[3]===`"`?L:I):o===L||o===I?o=F:o===N||o===P?o=M:(o=F,i=void 0);let d=o===F&&e[t+1].startsWith(`/>`)?` `:``;a+=o===M?n+E:l>=0?(r.push(s),n.slice(0,l)+C+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[W(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},G=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=oe(t,n);if(this.el=e.createElement(l,r),U.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=U.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(C)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ce:r[1]===`?`?le:r[1]===`@`?ue:J}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(R.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],O()),U.nextNode(),c.push({type:2,index:++a});i.append(e[t],O())}}}else if(i.nodeType===8)if(i.data===T)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=D.createElement(`template`);return n.innerHTML=e,n}};function K(e,t,n=e,r){if(t===B)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=k(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=K(e,i._$AS(e,t.values),i,r)),t}var se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??D).importNode(t,!0);U.currentNode=r;let i=U.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new q(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new de(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=U.nextNode(),a++)}return U.currentNode=D,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},q=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),k(e)?e===V||e==null||e===``?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=G.createElement(W(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new se(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return t===void 0&&H.set(e.strings,t=new G(e)),t}k(t){A(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(O()),this.O(O()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=b(e).nextSibling;b(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=K(this,e,t,0),a=!k(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=K(this,r[n+o],t,o),s===B&&(s=this._$AH[o]),a||=!k(s)||s!==this._$AH[o],s===V?e=V:e!==V&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ce=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}},le=class extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}},ue=class extends J{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??V)===B)return;let n=this._$AH,r=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==V&&(n===V||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},de=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}},fe=y.litHtmlPolyfillSupport;fe?.(G,q),(y.litHtmlVersions??=[]).push(`3.3.2`);var pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new q(t.insertBefore(O(),e),e,void 0,n??{})}return i._$AI(e),i},Y=globalThis,X=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};X._$litElement$=!0,X.finalized=!0,Y.litElementHydrateSupport?.({LitElement:X});var me=Y.litElementPolyfillSupport;me?.({LitElement:X}),(Y.litElementVersions??=[]).push(`4.2.2`);var Z=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e`,Q=``+new URL(`vite-BF8QNONU.svg`,import.meta.url).href,he=``+new URL(`hero-CLDdwZDr.png`,import.meta.url).href,ge=class extends X{static get properties(){return{count:{type:Number}}}constructor(){super(),this.count=0}render(){return z`
      <section id="center">
        <div class="hero">
          <img src=${he} class="base" width="170" height="179" alt="" />
          <img src=${Z} class="framework" alt="Lit logo" />
          <img src=${Q} class="vite" alt="Vite logo" />
        </div>
        <div>
          <slot></slot>
          <p>
            Edit <code>src/my-element.js</code> and save to test
            <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          class="counter"
          @click=${this._onClick}
          part="button"
        >
          Count is ${this.count}
        </button>
      </section>

      <div class="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg class="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img class="logo" src=${Q} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://lit.dev/" target="_blank">
                <img class="button-icon" src=${Z} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg class="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div class="ticks"></div>
      <section id="spacer"></section>
    `}_onClick(){this.count++}static get styles(){return o`
      :host {
        --text: #6b6375;
        --text-h: #08060d;
        --bg: #fff;
        --border: #e5e4e7;
        --code-bg: #f4f3ec;
        --accent: #aa3bff;
        --accent-bg: rgba(170, 59, 255, 0.1);
        --accent-border: rgba(170, 59, 255, 0.5);
        --social-bg: rgba(244, 243, 236, 0.5);
        --shadow:
          rgba(0, 0, 0, 0.1) 0 10px 15px -3px,
          rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

        --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
        --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
        --mono: ui-monospace, Consolas, monospace;

        font: 18px/145% var(--sans);
        letter-spacing: 0.18px;

        width: 1126px;
        max-width: 100%;
        margin: 0 auto;
        text-align: center;
        border-inline: 1px solid var(--border);
        min-height: 100svh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        color: var(--text);
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --text: #9ca3af;
          --text-h: #f3f4f6;
          --bg: #16171d;
          --border: #2e303a;
          --code-bg: #1f2028;
          --accent: #c084fc;
          --accent-bg: rgba(192, 132, 252, 0.15);
          --accent-border: rgba(192, 132, 252, 0.5);
          --social-bg: rgba(47, 48, 58, 0.5);
          --shadow:
            rgba(0, 0, 0, 0.4) 0 10px 15px -3px,
            rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
        }

        #social .button-icon {
          filter: invert(1) brightness(2);
        }
      }

      h1,
      h2,
      ::slotted(h1),
      ::slotted(h2) {
        font-family: var(--heading);
        font-weight: 500;
        color: var(--text-h);
      }

      h1,
      ::slotted(h1) {
        font-size: 56px;
        letter-spacing: -1.68px;
        margin: 32px 0;
      }

      h2 {
        font-size: 24px;
        line-height: 118%;
        letter-spacing: -0.24px;
        margin: 0 0 8px;
      }

      p {
        margin: 0;
      }

      code {
        font-family: var(--mono);
        font-size: 15px;
        line-height: 135%;
        display: inline-flex;
        padding: 4px 8px;
        border-radius: 4px;
        color: var(--text-h);
        background: var(--code-bg);
      }

      .counter {
        font-family: var(--mono);
        font-size: 16px;
        display: inline-flex;
        padding: 5px 10px;
        border-radius: 5px;
        color: var(--accent);
        background: var(--accent-bg);
        border: 2px solid transparent;
        transition: border-color 0.3s;
        margin-bottom: 24px;
        cursor: pointer;
      }

      .counter:hover {
        border-color: var(--accent-border);
      }

      .counter:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
      }

      .hero {
        position: relative;
      }

      .hero .base,
      .hero .framework,
      .hero .vite {
        inset-inline: 0;
        margin: 0 auto;
      }

      .hero .base {
        width: 170px;
        position: relative;
        z-index: 0;
      }

      .hero .framework,
      .hero .vite {
        position: absolute;
      }

      .hero .framework {
        z-index: 1;
        top: 34px;
        height: 28px;
        transform: perspective(2000px) rotateZ(300deg) rotateX(44deg)
          rotateY(39deg) scale(1.4);
      }

      .hero .vite {
        z-index: 0;
        top: 107px;
        height: 26px;
        width: auto;
        transform: perspective(2000px) rotateZ(300deg) rotateX(40deg)
          rotateY(39deg) scale(0.8);
      }

      #center {
        display: flex;
        flex-direction: column;
        gap: 25px;
        place-content: center;
        place-items: center;
        flex-grow: 1;
      }

      #next-steps {
        display: flex;
        border-top: 1px solid var(--border);
        text-align: left;
      }

      #next-steps > div {
        flex: 1 1 0;
        padding: 32px;
      }

      #next-steps .icon {
        margin-bottom: 16px;
        width: 22px;
        height: 22px;
      }

      #docs {
        border-right: 1px solid var(--border);
      }

      #next-steps ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 8px;
        margin: 32px 0 0;
      }

      #next-steps ul .logo {
        height: 18px;
      }

      #next-steps ul .logo svg {
        height: 100%;
        width: auto;
      }

      #next-steps ul a {
        color: var(--text-h);
        font-size: 16px;
        border-radius: 6px;
        background: var(--social-bg);
        display: flex;
        padding: 6px 12px;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        transition: box-shadow 0.3s;
      }

      #next-steps ul a:hover {
        box-shadow: var(--shadow);
      }

      #next-steps ul .button-icon {
        height: 18px;
        width: 18px;
      }

      #spacer {
        height: 88px;
        border-top: 1px solid var(--border);
      }

      .ticks {
        position: relative;
        width: 100%;
      }

      .ticks::before,
      .ticks::after {
        content: '';
        position: absolute;
        top: -4.5px;
        border: 5px solid transparent;
      }

      .ticks::before {
        left: 0;
        border-left-color: var(--border);
      }

      .ticks::after {
        right: 0;
        border-right-color: var(--border);
      }

      @media (max-width: 1024px) {
        :host {
          font-size: 16px;
          width: 100%;
          max-width: 100%;
        }

        h1,
        ::slotted(h1) {
          font-size: 36px;
          margin: 20px 0;
        }

        h2,
        ::slotted(h2) {
          font-size: 20px;
        }

        #center {
          padding: 32px 20px 24px;
          gap: 18px;
        }

        #next-steps {
          flex-direction: column;
          text-align: center;
        }

        #next-steps > div {
          padding: 24px 20px;
        }

        #docs {
          border-right: none;
          border-bottom: 1px solid var(--border);
        }

        #next-steps ul {
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        #next-steps ul li {
          flex: 1 1 calc(50% - 8px);
        }

        #next-steps ul a {
          width: 100%;
          justify-content: center;
          box-sizing: border-box;
        }

        #spacer {
          height: 48px;
        }
      }
    `}};window.customElements.define(`my-element`,ge);var _e=class extends X{static get properties(){return{depts:{attribute:!1},_open:{state:!0},_selected:{state:!0},_expanded:{state:!0}}}constructor(){super(),this.depts=[],this._open=!1,this._selected=null,this._expanded=new Set,this._onDocClick=this._onDocClick.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._onDocClick)}willUpdate(e){e.has(`depts`)&&(this._expanded=new Set,this._buildFirstLevelExpansion())}_buildTree(){let e=new Map,t=[];for(let t of this.depts)e.set(t.deptno,{...t,children:[]});for(let n of e.values())if(!n.parentno)t.push(n);else{let r=e.get(n.parentno);r?r.children.push(n):t.push(n)}return t}_buildFirstLevelExpansion(){for(let e of this.depts)e.parentno||(this._expanded=new Set([...this._expanded,e.deptno]))}_onDocClick(e){this._open&&(e.composedPath().includes(this)||(this._open=!1))}_onTriggerClick(e){e.stopPropagation(),this._open=!this._open}_onNodeClick(e,t){if(e.stopPropagation(),t.children.length>0){let e=new Set(this._expanded);e.has(t.deptno)?e.delete(t.deptno):e.add(t.deptno),this._expanded=e}this._selected=t,this.dispatchEvent(new CustomEvent(`dept-selected`,{detail:{deptno:t.deptno,deptname:t.deptname,parentno:t.parentno},bubbles:!0,composed:!0})),t.children.length===0&&(this._open=!1)}_renderNode(e,t=0){let n=this._expanded.has(e.deptno),r=e.children.length>0,i=this._selected?.deptno===e.deptno;return z`
      <li class="tree-node" role="none">
        <button
          type="button"
          class="node-btn ${i?`selected`:``}"
          style="--level: ${t};"
          role="treeitem"
          aria-expanded=${r?String(n):V}
          aria-selected=${String(i)}
          @click=${t=>this._onNodeClick(t,e)}
        >
          <span class="node-icon" aria-hidden="true">
            ${r?z`<svg viewBox="0 0 10 10" width="10" height="10" class="chevron ${n?`open`:``}">
                  <path d="M2 3 L5 7 L8 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`:z`<span class="leaf-dot"></span>`}
          </span>
          <span class="node-label">${e.deptname}</span>
        </button>
        ${r&&n?z`<ul role="group" class="subtree">
              ${e.children.map(e=>this._renderNode(e,t+1))}
            </ul>`:V}
      </li>
    `}render(){let e=this._buildTree(),t=this._selected?this._selected.deptname:`請選擇單位`;return z`
      <div class="wrapper">
        <button
          type="button"
          class="trigger ${this._open?`open`:``}"
          part="trigger"
          aria-haspopup="tree"
          aria-expanded=${String(this._open)}
          @click=${this._onTriggerClick}
        >
          <span class="trigger-label ${this._selected?``:`placeholder`}">${t}</span>
          <svg class="trigger-arrow ${this._open?`open`:``}" viewBox="0 0 10 10" width="12" height="12" aria-hidden="true">
            <path d="M2 3 L5 7 L8 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        ${this._open?z`<div class="panel" part="panel" role="tree" aria-label="部門選擇">
              <ul class="tree-root" role="group">
                ${e.map(e=>this._renderNode(e,0))}
              </ul>
            </div>`:V}
      </div>
    `}static get styles(){return o`
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
    `}};window.customElements.define(`dept-tree-view`,_e);var ve=[{deptno:`1`,deptname:`總公司`,parentno:``},{deptno:`1-1`,deptname:`業務處`,parentno:`1`},{deptno:`1-2`,deptname:`技術處`,parentno:`1`},{deptno:`1-3`,deptname:`行政處`,parentno:`1`},{deptno:`1-1-1`,deptname:`北區業務部`,parentno:`1-1`},{deptno:`1-1-2`,deptname:`中區業務部`,parentno:`1-1`},{deptno:`1-1-3`,deptname:`南區業務部`,parentno:`1-1`},{deptno:`1-2-1`,deptname:`前端工程部`,parentno:`1-2`},{deptno:`1-2-2`,deptname:`後端工程部`,parentno:`1-2`},{deptno:`1-2-3`,deptname:`資安部`,parentno:`1-2`},{deptno:`1-3-1`,deptname:`人資部`,parentno:`1-3`},{deptno:`1-3-2`,deptname:`財務部`,parentno:`1-3`},{deptno:`1-2-1-1`,deptname:`UI/UX 組`,parentno:`1-2-1`},{deptno:`1-2-1-2`,deptname:`元件開發組`,parentno:`1-2-1`}],$=document.getElementById(`tree`),ye=document.getElementById(`result`);customElements.whenDefined(`dept-tree-view`).then(()=>{$.depts=ve}),$.addEventListener(`dept-selected`,e=>{let{deptno:t,deptname:n,parentno:r}=e.detail;ye.innerHTML=`已選取：<span>${n}</span>（代碼：${t}，上層：${r||`無`}）`});
//# sourceMappingURL=index-D7mj5Gf8.js.map