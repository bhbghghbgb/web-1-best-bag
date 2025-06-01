import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import topLevelAwait from 'vite-plugin-top-level-await'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'
import { visualizerPlugins } from './visualizer-plugin'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL ?? './',
  plugins: [
    vue(),
    vueJsx(),
    topLevelAwait(),
    vueDevTools(),
    vuetify({
      autoImport: true, // Enabled by default,
    }),
    tailwindcss(),
    nodePolyfills({ include: ['process', 'path'], protocolImports: true }),
    legacy(),
    Components({
      dts: true, // enabled by default if `typescript` is installed,
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    AutoImport({
      dts: true, // or a custom path,
      resolvers: [Vuetify3Resolver(), VueHooksPlusResolver()],
    }),
    // put it last
    ...visualizerPlugins,
  ],
  css: {
    postcss: { plugins: [autoprefixer] },
  },
  optimizeDeps: {
    exclude: ['monaco-editor', 'isolated-vm', 'quickjs-emscripten'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@test': fileURLToPath(new URL('./test', import.meta.url)),
      fs: 'node-stdlib-browser/mock/empty',
      'node:fs/promises': 'node-stdlib-browser/mock/empty',
    },
  },
  esbuild: {
    supported: { using: false, 'top-level-await': false },
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         // bundle all the shiki themes/langs together
  //         if (id.match(/@shikijs\/(langs|themes)/)) {
  //           return 'shikires'
  //         }
  //       },
  //     },
  //   },
  // },
})
