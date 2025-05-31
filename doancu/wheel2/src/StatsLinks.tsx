import type { TemplateType } from "rollup-plugin-visualizer/dist/plugin/template-types";

// Define a mapping for specific template types to their desired extensions.
// Using Partial<Record<TemplateType, string>> allows you to define only
// the specific mappings you need, resolving the TypeScript error.
const templateExtensions: Partial<Record<TemplateType, string>> = {
  "raw-data": "json",
  list: "yml",
};

// Original array of template types, matching your visualizer configuration.
const templates: TemplateType[] = [
  "sunburst",
  "treemap",
  "network",
  "raw-data",
  "list",
  "flamegraph",
];

/**
 * A React component that displays links to generated visualization files.
 * These links are dynamically created based on the template types and
 * their configured file extensions.
 *
 * The component is styled using Tailwind CSS for a modern and responsive look.
 * Links open in a new tab.
 */
const StatsLinks: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center font-inter">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg border border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center leading-tight">
          📊 Generated Rollup Plugin Visualizer
        </h2>
        <p className="text-gray-600 text-center mb-8 text-base sm:text-lg">
          Click on a link below to view the detailed statistics.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {templates.map((t) => {
            // Determine the file extension for the current template type.
            // Defaults to 'html' if no specific mapping is found.
            const ext = templateExtensions[t] || "html";
            // Construct the filename, e.g., 'stats.sunburst.html'
            const filename = `stats.${t}.${ext}`;
            // The link path is relative to the base URL of your deployed project.
            // GitHub Pages will handle the base path correctly based on your vite.config.js.
            const linkPath = `./${filename}`;

            return (
              <a
                key={t}
                href={linkPath}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="block w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md
                           hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                           transition duration-300 ease-in-out text-center text-lg sm:text-xl capitalize
                           transform hover:scale-105" // Subtle hover effect
              >
                {/* Format the template name for display (e.g., "raw-data" -> "Raw Data") */}
                {`${t.replace("-", " ")} (${ext})`}
              </a>
            );
          })}
        </div>
        <p className="text-gray-500 text-sm text-center mt-8">
          All files are generated in the `dist` directory.
        </p>
      </div>
    </div>
  );
};

export default StatsLinks;
