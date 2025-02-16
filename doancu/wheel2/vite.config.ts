import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import monacoEditorEsmPlugin from "vite-plugin-monaco-editor-esm";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    nodePolyfills({ include: ["process", "path"] }),
    monacoEditorEsmPlugin({
      // editorWorkerService is must include base worker
      // javascript shares the same worker
      languageWorkers: ["editorWorkerService", "typescript"],
      globalAPI: true,
    }),
  ],
  optimizeDeps: {
    exclude: ["isolated-vm"],
  },
  build: {
    target: "es2022",
    rollupOptions: {
      external: ["isolated-vm"],
    },
    // sourcemap: true,
  },
  worker: {
    format: "es",
    rollupOptions: {
      external: ["isolated-vm"],
    },
  },
});
