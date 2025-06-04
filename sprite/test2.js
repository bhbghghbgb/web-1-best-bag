import nsg from "node-sprite-generator";
import { basename } from "path";

function generateSpriteAsync(options) {
  return new Promise((resolve, reject) => {
    nsg(options, (err, layout) => {
      // Capture layout to test if it's passed
      if (err) {
        reject(err);
      } else {
        console.log("Sprite generated!");
        resolve(layout); // Resolve with layout details to check if `customStylesheet` executes
      }
    });
  });
}

// Custom stylesheet function to verify execution
function customStylesheet(
  layout,
  stylesheetPath,
  spritePath,
  stylesheetOptions,
  cb
) {
  console.log(
    `Custom Stylesheet Processing: ${layout.images.length} images | Dimensions: ${layout.width}x${layout.height}px`
  );
  cb(null);
}

async function run() {
  console.log("wait 1");
  const layout1 = await generateSpriteAsync({
    src: ["../images/LL22*.jpg"],
    spritePath: "sprite1.png",
    stylesheetPath: "sprite1.css",
    stylesheet: customStylesheet, // Apply custom function
    stylesheetOptions: {
      prefix: "sprite .",
    },
    layout: "packed",
    layoutOptions: {
      padding: 0,
    },
    compositor: "jimp",
    compositorOptions: {
      compressionLevel: 6,
      filter: "all",
    },
  });

  console.log("Layout data for sprite1:", layout1);

  console.log("wait 2");
  const layout2 = await generateSpriteAsync({
    src: ["../images/LL22*.jpg"],
    spritePath: "sprite2.png",
    stylesheetPath: "sprite2.css",
    stylesheet: customStylesheet, // Apply custom function
    stylesheetOptions: {
      prefix: "sprite .",
    },
    layout: "packed",
    layoutOptions: {
      padding: 0,
    },
    compositor: "jimp",
    compositorOptions: {
      compressionLevel: 6,
      filter: "all",
    },
  });

  console.log("Layout data for sprite2:", layout2);

  console.log("All sprites generated!");
}

run().catch((err) => console.error("Error:", err));
