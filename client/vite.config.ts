import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
