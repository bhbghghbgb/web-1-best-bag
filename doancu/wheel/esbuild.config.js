import { build } from "esbuild";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

build({
    entryPoints: ["wheel.web.js"], // Your entry point
    bundle: true,
    minify: true,
    // outfile: "./dist/wheel.build.js", // Output file
    outdir: "dist", // needs to be set[1]
    metafile: true, // needs to be set[1]
    plugins: [
      htmlPlugin({
        files: [
          {
            entryPoints: ["wheel.web.js"],
            filename: "index.html", // Output HTML file
            htmlTemplate: "wheel.html",
            favicon: "./public/favicon.svg",
          },
        ],
      }),
    ],
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
