import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Keep CRA's output dir so existing deploy config and .gitignore (/build) still apply
    outDir: "build",
  },
  css: {
    // Vendored owl.carousel CSS uses legacy IE star-hacks (e.g. `*display: inline`).
    // errorRecovery lets lightningcss strip them instead of failing the build.
    lightningcss: {
      errorRecovery: true,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
