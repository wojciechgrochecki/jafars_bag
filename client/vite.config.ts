import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true, host: true, port: 5173 },
  plugins: [react(), svgr({ include: "**/*.svg?react" })],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@assets": "/src/assets",
    },
  },
  optimizeDeps: {
    exclude: ["merge-refs", "chunk-NXTG4QHP.js?v=272bd39e"],
  },
});
