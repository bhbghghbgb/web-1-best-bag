import {
  existsSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
  unlinkSync,
} from "fs";
import mock from "mock-fs";
import nsg from "node-sprite-generator";
import { basename, resolve, dirname } from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { promisify } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Convert nsg to a promise-based function since it's callback-based by default
const nsgAsync = promisify(nsg);

// 1. Read and parse the san-pham.json file synchronously
const products = JSON.parse(
  readFileSync(resolve(__dirname, "../Data/san-pham.json"), "utf8")
);

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

/*
 * IMPORTANT NOTES ABOUT MOCK-FS:
 *
 * 1. Sync vs Async Operations:
 *    - mock-fs works best with synchronous file operations (readFileSync, writeFileSync)
 *    - When using async operations with bypass(), mock-fs temporarily releases its mock
 *      which can cause race conditions if another operation tries to access mocked files
 *
 * 2. Memory Considerations:
 *    - mock-fs keeps all mocked files in memory
 *    - Large files (like sprite PNGs) should be processed quickly and removed from mocks
 *
 * 3. Best Practices:
 *    - Use sync operations when working with mock-fs
 *    - Only bypass mocks for final output files
 *    - Delete temporary files promptly to save memory
 */
// Initialize mock-fs for nsg's file operations
// Note: We're mocking only what nsg needs to access:
// - node_modules (for nsg's dependencies)
// - images (source images)
// - sprite (output directory for temporary files)
// We'll use real filesystem (bypass) for final outputs to avoid memory issues
mock({
  node_modules: mock.load(resolve(__dirname, "node_modules")),
  images: mock.load(resolve(__dirname, "../images"), { recursive: false }),
  sprite: mock.directory(),
});

// Process each sprite group sequentially using sync operations
// Why sync? Because with async operations and mock-fs bypass:
// 1. The mock gets temporarily released during bypass
// 2. If nsg tries to access another file during this time, it fails
// 3. Sync operations maintain consistent mock state throughout
for (let groupIndex = 0; groupIndex < imageGroups.length; groupIndex++) {
  const group = imageGroups[groupIndex];
  const startRange = groupIndex * chunkSize;
  const endRange = startRange + group.length - 1;

  const spriteName = `sprite-${startRange}-${endRange}`;
  const spriteTempPath = `sprite/${spriteName}.png`;
  const spriteOutPath = `images/${spriteName}.webp`;
  const spriteOutDebugPath = `images/${spriteName}.png`;
  const stylesheetName = `sprite-${startRange}-${endRange}.css`;

  console.log(`Processing sprite ${spriteName}`);

  try {
    // Generate the sprite - this writes to mock-fs
    await writeSpriteTemp(group, spriteTempPath, spriteOutPath, stylesheetName);

    // Read the temporary sprite file from mock-fs
    console.log(`Reading sprite ${spriteTempPath}`);
    const spriteFile = readFileSync(resolve(__dirname, spriteTempPath));

    // // Write debug version (PNG) to real filesystem
    // console.log(`Writing debug sprite ${spriteOutDebugPath}`);
    // mock.bypass(() => {
    //   mkdirSync(dirname(resolve(__dirname, spriteOutDebugPath)), {
    //     recursive: true,
    //   });
    //   writeFileSync(resolve(__dirname, spriteOutDebugPath), spriteFile);
    // });

    // Delete the temporary sprite file from mock-fs immediately after use
    // Critical because:
    // 1. mock-fs stores files in memory - large PNGs waste RAM
    // 2. We've already saved the file to real filesystem via bypass
    // 3. Keeping it would double the memory usage (mock + real fs)
    console.log(`Deleting sprite ${spriteTempPath}`);
    unlinkSync(resolve(__dirname, spriteTempPath));

    // Compress the sprite to WebP format
    // use this tool to experiment with quality https://squoosh.app/
    console.log(`Compressing sprite ${spriteName}`);
    const spriteCompressedBuf = await sharp(spriteFile)
      .removeAlpha()
      .webp({ quality: 50, smartDeblock: true, effort: 6 })
      .toBuffer();

    // Write final WebP version to real filesystem
    console.log(`Writing sprite ${spriteOutPath}`);
    mock.bypass(() => {
      mkdirSync(dirname(resolve(__dirname, spriteOutPath)), {
        recursive: true,
      });
      writeFileSync(resolve(__dirname, spriteOutPath), spriteCompressedBuf);
    });
  } catch (err) {
    console.error(`Error processing sprite group ${spriteName}:`, err);
    continue; // Continue with next group if one fails
  }
}

// Helper function to generate sprite with layout information
async function writeSpriteTemp(
  group,
  spriteTempPath,
  toBeCreatedSpriteOutPath,
  stylesheetName
) {
  // Custom stylesheet generator to collect layout data
  function customStylesheet(
    layout,
    _stylesheetPath,
    _spritePath,
    _stylesheetOptions,
    cb
  ) {
    console.log(
      `Processing sprite ${spriteTempPath} with ${layout.images.length} images | Dimensions: ${layout.width}x${layout.height}px`
    );

    // Store the layout information in our mapping
    spriteMapping[basename(toBeCreatedSpriteOutPath)] = {
      w: layout.width,
      h: layout.height,
      i: layout.images.map((img) => ({
        f: basename(img.path),
        x: img.x,
        y: img.y,
        w: img.width,
        h: img.height,
      })),
    };

    return cb(null);
  }

  await nsgAsync({
    src: group.map((name) => `images/${name}`),
    spritePath: spriteTempPath,
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
}

// Restore the real filesystem - no more mocking after this point
// Important: Do this before writing the final mapping file
// because we want that written to the real filesystem
mock.restore();

// 5. Save the sprite mapping to a JSON file
writeFileSync(
  resolve(__dirname, "sprite-mapping.json"),
  JSON.stringify(spriteMapping, null, 2),
  { encoding: "utf-8" }
);
console.log("Sprite mapping saved to sprite-mapping.json");
