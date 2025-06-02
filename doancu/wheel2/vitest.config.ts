import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";
import react from "@vitejs/plugin-react-swc";

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react()],
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude],
      root: fileURLToPath(new URL("./", import.meta.url)),
    },
  })
);
