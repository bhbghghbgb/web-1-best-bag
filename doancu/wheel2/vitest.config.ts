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
      exclude: [...configDefaults.exclude, "test/e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      reporters: process.env.GITHUB_ACTIONS
        ? ["verbose", "github-actions", "json", "junit", "html"]
        : ["default"],
      outputFile: {
        json: "./dist/test-results/results.json",
        junit: "./dist/test-results/results.xml",
        html: "./dist/test-results/index.html",
      },
    },
  })
);
