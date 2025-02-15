import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [nodePolyfills({ exclude: ["fs"] }), react()],
  optimizeDeps: {
    exclude: ["isolated-vm"],
  },
  build: {
    target: "es2022",
    rollupOptions: {
      external: ["isolated-vm"],
    },
  },
});
