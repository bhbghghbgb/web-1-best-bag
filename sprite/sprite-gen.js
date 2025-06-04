import { existsSync, readFileSync, writeFileSync } from "fs";
import nsg from "node-sprite-generator";
import { basename, resolve } from "path";
import { promisify } from "util";

// Convert nsg to a promise-based function so we can use `await`
const nsgAsync = promisify(nsg);

function generateSpriteAsync(options) {
  return new Promise((resolve, reject) => {
    nsg(options, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// 1. Read and parse the san-pham.json file
const products = JSON.parse(readFileSync("../Data/san-pham.json", "utf8"));

// 2. Collect all existing image files with image-file first, then image2-file
const existingImages = [];

// First add all image-file entries
products.forEach((product) => {
  if (
    product["image-file"] &&
    existsSync(`../images/${product["image-file"]}`)
  ) {
    existingImages.push(product["image-file"]);
  }
});

// Then add all image2-file entries
products.forEach((product) => {
  if (
    product["image2-file"] &&
    existsSync(`../images/${product["image2-file"]}`)
  ) {
    existingImages.push(product["image2-file"]);
  }
});

console.log(`Found ${existingImages.length} existing images to process`);

// 3. Split into groups of 60 (maintaining the order)
const chunkSize = 60;
const imageGroups = [];
for (let i = 0; i < existingImages.length; i += chunkSize) {
  const chunk = existingImages.slice(i, i + chunkSize);
  imageGroups.push(chunk);
}

// 4. Generate sprites for each group and collect mapping data
const spriteMapping = {};

async function generateSprites() {
  for (let groupIndex = 0; groupIndex < imageGroups.length; groupIndex++) {
    const group = imageGroups[groupIndex];
    const startRange = groupIndex * chunkSize;
    const endRange = startRange + group.length - 1; // -1 because we want inclusive end

    const spriteName = `sprite-${startRange}-${endRange}.png`;
    const stylesheetName = `sprite-${startRange}-${endRange}.css`;

    // Custom stylesheet generator to collect layout data
    function customStylesheet(layout) {
      console.log(
        `Processing sprite ${spriteName} with ${layout.images.length} images | Dimensions: ${layout.width}x${layout.height}px`
      );

      // Store the layout information in our mapping
      spriteMapping[spriteName] = layout.images.map((img) => ({
        filename: basename(img.path),
        x: img.x,
        y: img.y,
        width: img.width,
        height: img.height,
      }));
    }

    console.log(`Processing sprite ${spriteName}`);

    // Generate the sprite
    await generateSpriteAsync({
      src: group.map((name) => `../images/${name}`),
      spritePath: `images/${spriteName}`,
      stylesheetPath: stylesheetName,
      stylesheet: customStylesheet,
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

    console.log("nsgAsync finished processing!");
  }
}

generateSprites().then(() => {
  // 5. Save the sprite mapping to a JSON file
  writeFileSync("sprite-mapping.json", JSON.stringify(spriteMapping, null, 2));
  console.log("Sprite mapping saved to sprite-mapping.json");
});
