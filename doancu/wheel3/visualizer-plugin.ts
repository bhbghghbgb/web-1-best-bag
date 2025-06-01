import { visualizer } from 'rollup-plugin-visualizer'
import type { TemplateType } from 'rollup-plugin-visualizer/dist/plugin/template-types'

// Define a mapping for specific template types to their desired extensions
const templateExtensions: Partial<Record<TemplateType, string>> = {
  'raw-data': 'json',
  list: 'yml',
}

// Original array of template types
const templates: TemplateType[] = [
  'sunburst',
  'treemap',
  'network',
  'raw-data',
  'list',
  'flamegraph',
]

export const visualizerPlugins = templates.map((t) => {
  // Determine the file extension based on the template type
  // If a specific extension is defined in templateExtensions, use it.
  // Otherwise, default to 'html'.
  const ext = templateExtensions[t] || 'html'

  return visualizer({
    filename: `stats.${t}.${ext}`, // Construct the filename with the determined extension
    emitFile: true,
    template: t, // Ensure the template type is correctly passed
    gzipSize: true,
    brotliSize: true,
  })
})
