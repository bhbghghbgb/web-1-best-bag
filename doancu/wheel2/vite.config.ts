import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import type { TemplateType } from "rollup-plugin-visualizer/dist/plugin/template-types";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// import monacoEditorEsmPlugin from "vite-plugin-monaco-editor-esm";

// Define a mapping for specific template types to their desired extensions
const templateExtensions: Partial<Record<TemplateType, string>> = {
  "raw-data": "json",
  list: "yml",
};

// Original array of template types
const templates: TemplateType[] = [
  "sunburst",
  "treemap",
  "network",
  "raw-data",
  "list",
  "flamegraph",
];

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL ?? "./",
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({ include: ["process", "path"], protocolImports: true }),
    // monacoEditorEsmPlugin({
    //   // editorWorkerService is must include base worker
    //   // javascript shares the same worker
    //   languageWorkers: ["editorWorkerService", "typescript"],
    //   globalAPI: true,
    // }),
    legacy(),
    // put it last
    ...templates.map((t) => {
      // Determine the file extension based on the template type
      // If a specific extension is defined in templateExtensions, use it.
      // Otherwise, default to 'html'.
      const ext = templateExtensions[t] || "html";

      return visualizer({
        filename: `stats.${t}.${ext}`, // Construct the filename with the determined extension
        emitFile: true,
        template: t, // Ensure the template type is correctly passed
        gzipSize: true,
        brotliSize: true,
      });
    }),
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
    // target: "es2022",
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
