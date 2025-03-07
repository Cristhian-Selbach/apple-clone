import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "jsm-b7x",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-b7x",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
});