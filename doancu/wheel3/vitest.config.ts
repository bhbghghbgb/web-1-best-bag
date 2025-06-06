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
      reporters: process.env.CI
        ? ['verbose', 'html', 'json', 'junit'].concat(
            process.env.GITHUB_ACTIONS ? ['github-actions'] : [],
          )
        : ['default'],
      outputFile: {
        html: `${process.env.CI ? 'dist/vi' : ''}test-results/index.html`,
        json: `${process.env.CI ? 'dist/vi' : ''}test-results/results.json`,
        junit: `${process.env.CI ? 'dist/vi' : ''}test-results/results.xml`,
      },
    },
  }),
)
