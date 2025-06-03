import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
// import path from 'node:path'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'test/e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      env: {
        DEBUG: '-webcrack:*', // silence the webcrack logs
      },
      // silent: true,
      // doesn't work
      // onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
      //   return !log.includes('webcrack')
      // },
      reporters: process.env.GITHUB_ACTIONS
        ? ['verbose', 'github-actions', 'json', 'junit', 'html']
        : ['default'],
      outputFile: {
        json: './public/test-results/results.json',
        junit: './public/test-results/results.xml',
        html: './public/test-results/index.html',
      },
    },
  }),
)
