# GitHub Pages 部署說明

## 建置命令

### 開發
```bash
npm run dev          # 啟動開發伺服器
```

### 建置
```bash
npm run build        # 一般建置（輸出到 dist）
npm run build:pages  # GitHub Pages 建置（輸出到 pages）
```

### 預覽
```bash
npm run preview       # 預覽一般建置
npm run preview:pages # 預覽 GitHub Pages 建置
```

## GitHub Pages 部署步驟

1. **建置專案**
   ```bash
   npm run build:pages
   ```

2. **提交 pages 目錄到 Git**
   ```bash
   git add pages/
   git commit -m "Build for GitHub Pages"
   git push
   ```

3. **在 GitHub 設定 Pages**
   - 前往你的 GitHub 倉庫
   - 點選 "Settings" 頁籤
   - 左側選擇 "Pages"
   - Source 設定為 "Deploy from a branch"
   - Branch 選擇 "main"
   - Folder 選擇 "/pages"
   - 點選 "Save"

4. **等待部署完成**
   - GitHub 會自動部署你的網站
   - 部署完成後，會顯示網站 URL

## 注意事項

- `pages` 目錄是建置輸出目錄，應該提交到 Git 中
- 建置時會自動創建 `.nojekyll` 檔案，確保 GitHub Pages 正確處理
- 使用相對路徑 (`./`) 確保在 GitHub Pages 子目錄中正常運作
- 每次有程式碼更新時，重新執行建置命令並提交 `pages` 目錄