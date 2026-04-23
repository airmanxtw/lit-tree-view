import { defineConfig } from "vite";
import { writeFileSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  // GitHub Pages 建置配置
  build: {
    outDir: "docs", // 輸出到 docs 目錄
    emptyOutDir: true, // 建置前清空目錄
    assetsDir: "assets", // 資源檔案目錄
    sourcemap: true, // 產生 source map 用於除錯
  },

  // GitHub Pages 部署配置
  base: "./", // 使用相對路徑，確保在 GitHub Pages 上能正常運作

  // 建置鉤子：在建置完成後創建 .nojekyll 檔案
  plugins: [
    {
      name: "github-pages",
      writeBundle() {
        // 創建 .nojekyll 檔案（GitHub Pages 需要）
        const nojekyllPath = resolve("docs", ".nojekyll");
        writeFileSync(nojekyllPath, "");
        console.log("✓ Created .nojekyll file for GitHub Pages");
      },
    },
  ],

  // 預覽設定（開發用）
  preview: {
    port: 4173,
    open: true,
  },

  // 開發伺服器設定
  server: {
    port: 3000,
    open: true,
  },
});
