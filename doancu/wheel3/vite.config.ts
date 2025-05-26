import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    topLevelAwait(),
    vueDevTools(),
    vuetify({
      autoImport: true, // Enabled by default,
    }),
    tailwindcss(),
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
  ],
  css: {
    postcss: { plugins: [autoprefixer] },
  },
  optimizeDeps: {
    exclude: ['monaco-editor'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
