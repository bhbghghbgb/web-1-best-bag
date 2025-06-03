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
      reporters: process.env.CI
        ? ["verbose", "html", "json", "junit"].concat(
            process.env.GITHUB_ACTIONS ? ["github-actions"] : []
          )
        : ["default"],
      outputFile: {
        html: `${process.env.CI ? "public/vi" : ""}test-results/index.html`,
        json: `${process.env.CI ? "public/vi" : ""}test-results/results.json`,
        junit: `${process.env.CI ? "public/vi" : ""}test-results/results.xml`,
      },
    },
  })
);
