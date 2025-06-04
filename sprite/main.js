const nsg = require("node-sprite-generator");

// const tng = require("tinyglobby")
// console.log(tng.globSync(['../images/LL*.jpg']));

nsg(
  {
    src: ["../images/LL*.jpg"],
    spritePath: "sprite.png",
    stylesheetPath: "sprite.css",
    stylesheet: "css",
    stylesheetOptions: {
      prefix: ".sprite",
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
