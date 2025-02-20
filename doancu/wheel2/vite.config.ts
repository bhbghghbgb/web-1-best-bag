import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// import monacoEditorEsmPlugin from "vite-plugin-monaco-editor-esm";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL ?? "./",
  plugins: [
    react(),
    nodePolyfills({ include: ["process", "path"], protocolImports: true }),
    // monacoEditorEsmPlugin({
    //   // editorWorkerService is must include base worker
    //   // javascript shares the same worker
    //   languageWorkers: ["editorWorkerService", "typescript"],
    //   globalAPI: true,
    // }),
  ],
  resolve: {
    alias: {
      fs: "node-stdlib-browser/mock/empty",
      "node:fs/promises": "node-stdlib-browser/mock/empty",
    },
  },
  optimizeDeps: {
    exclude: ["isolated-vm"],
  },
  build: {
    target: "es2022",
    rollupOptions: {
      external: ["isolated-vm"],
    },
    // thuc ra cung ko can vi source tren github, nhung cu xai di vi build action free ma
    // sourcemap: true,
  },
  worker: {
    format: "es",
    rollupOptions: {
      external: ["isolated-vm"],
    },
  },
});
