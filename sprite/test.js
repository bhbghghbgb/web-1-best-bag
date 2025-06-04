import nsg from "node-sprite-generator";

console.log("wait 1");
nsg(
  {
    src: ["../images/LL22*.jpg"],
    spritePath: "sprite1.png",
    stylesheetPath: "sprite1.css",
    stylesheet: "css",
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
  },
  function (err) {
    console.log("Sprite generated!");
  }
);

console.log("wait 2");
nsg(
  {
    src: ["../images/LL22*.jpg"],
    spritePath: "sprite2.png",
    stylesheetPath: "sprite2.css",
    stylesheet: "css",
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
  },
  function (err) {
    console.log("Sprite generated!");
  }
);
