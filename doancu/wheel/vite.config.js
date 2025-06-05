import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: process.env.VITE_BASE_URL ?? "./",
  plugins: [legacy()],
});
