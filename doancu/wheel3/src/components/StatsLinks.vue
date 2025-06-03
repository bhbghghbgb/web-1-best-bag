<script setup lang="ts">
// Define TemplateType based on your existing setup.
// You might have this defined globally or in a separate types file.
// For this example, we'll define it here.
type TemplateType = 'sunburst' | 'treemap' | 'network' | 'raw-data' | 'list' | 'flamegraph'

// Define a mapping for specific template types to their desired extensions.
// Using Partial<Record<TemplateType, string>> allows you to define only
// the specific mappings you need, resolving the TypeScript error.
const templateExtensions: Partial<Record<TemplateType, string>> = {
  'raw-data': 'json',
  list: 'yml',
}

// Original array of template types, matching your visualizer configuration.
const templates: TemplateType[] = [
  'sunburst',
  'treemap',
  'network',
  'raw-data',
  'list',
  'flamegraph',
]

// Define data for test reports
const testReports = [
  {
    name: 'Vitest Tests',
    basePath: 'test-results',
    files: [
      { displayName: 'HTML Report', filename: 'index.html' },
      { displayName: 'JSON Results', filename: 'results.json' },
      { displayName: 'JUnit XML', filename: 'results.xml' },
    ],
  },
  {
    name: 'Playwright Tests',
    basePath: 'playwright-report',
    files: [
      { displayName: 'HTML Report', filename: 'index.html' },
      { displayName: 'JSON Results', filename: 'results.json' },
      { displayName: 'JUnit XML', filename: 'results.xml' },
    ],
  },
]
</script>

<template>
  <!--
    Main container for the StatsLinks component.
    - `w-full`: Ensures the component stretches to fill the width of its parent.
    - `p-4 sm:p-6`: Responsive padding.
    - `bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900`:
      Background gradient with dark mode variant.
    - `min-h-screen`: Ensures it takes at least the full viewport height if content is short.
    - `flex items-center justify-center`: Centers the content vertically and horizontally.
    - `font-inter`: Applies the Inter font (assuming it's configured in tailwind.config.js).
  -->
  <div
    class="w-full p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center font-inter"
  >
    <!--
      Inner content card.
      - `bg-white dark:bg-gray-700`: White background in light mode, dark gray in dark mode.
      - `p-6 sm:p-8`: Responsive padding.
      - `rounded-2xl`: Rounded corners.
      - `shadow-xl`: Large shadow for depth.
      - `w-full max-w-sm sm:max-w-md lg:max-w-lg`: Responsive width, ensuring it doesn't get too wide.
      - `border border-gray-200 dark:border-gray-600`: Subtle border.
    -->
    <div
      class="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg border border-gray-200 dark:border-gray-600"
    >
      <!--
        Component title.
        - `text-3xl sm:text-4xl`: Responsive font size.
        - `font-extrabold`: Extra bold text.
        - `text-gray-800 dark:text-gray-100`: Text color with dark mode variant.
        - `mb-6 text-center leading-tight`: Margin bottom, centered text, tight line height.
      -->
      <h2
        class="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 text-center leading-tight"
      >
        📊 Generated Rollup Plugin Visualizer
      </h2>
      <!--
        Introductory paragraph.
        - `text-gray-600 dark:text-gray-300`: Text color with dark mode variant.
        - `text-center mb-8 text-base sm:text-lg`: Centered text, margin bottom, responsive font size.
      -->
      <p class="text-gray-600 dark:text-gray-300 text-center mb-8 text-base sm:text-lg">
        Click on a link below to view the detailed statistics.
      </p>
      <!--
        Container for the links/buttons.
        - `flex flex-wrap justify-center gap-4`:
          - `flex`: Enables flexbox.
          - `flex-wrap`: Allows items to wrap to the next line if there's not enough space,
            prioritizing width over height.
          - `justify-center`: Centers items horizontally when they wrap.
          - `gap-4`: Adds space between items.
      -->
      <div class="flex flex-wrap justify-center gap-4">
        <!--
          Loop through the templates to generate each link.
          - `:key="t"`: Vue's key binding for efficient list rendering.
          - `:href="linkPath"`: Dynamically binds the href attribute.
          - `target="_blank"`: Opens the link in a new tab.
          - `rel="noopener noreferrer"`: Security best practice for `target="_blank"`.
        -->
        <a
          v-for="t in templates"
          :key="t"
          :href="
            (() => {
              const ext = templateExtensions[t] || 'html'
              const filename = `stats.${t}.${ext}`
              // The link path is relative to the base URL of your deployed project.
              // GitHub Pages will handle the base path correctly based on your vite.config.js.
              return `./${filename}`
            })()
          "
          target="_blank"
          rel="noopener noreferrer"
          class="flex-grow px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out text-center text-lg sm:text-xl capitalize transform hover:scale-105 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          :class="{ 'min-w-[150px]': true }"
        >
          {{ t.replace('-', ' ') }}
        </a>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
        <h3
          class="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 text-center leading-tight"
        >
          🚀 Test Reports
        </h3>
        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="reportSuite in testReports"
            :key="reportSuite.name"
            class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner"
          >
            <h4 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3 text-center">
              {{ reportSuite.name }}
            </h4>
            <div class="flex flex-wrap justify-center gap-3">
              <a
                v-for="file in reportSuite.files"
                :key="file.filename"
                :href="`./${reportSuite.basePath}/${file.filename}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 dark:bg-purple-700 dark:hover:bg-purple-800"
              >
                {{ file.displayName }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--
        Footer text.
        - `text-gray-500 dark:text-gray-400`: Text color with dark mode variant.
        - `text-sm text-center mt-8`: Small text, centered, margin top.
      -->
      <p class="text-gray-500 dark:text-gray-400 text-sm text-center mt-8">
        All files are generated in the `dist` directory. Only availale in production build.
      </p>
    </div>
  </div>
</template>

<style scoped>
/*
  Scoped styles for this component.
  No specific custom CSS is needed here as Tailwind handles most styling.
  You can add any specific overrides or complex animations if necessary.
*/
</style>
