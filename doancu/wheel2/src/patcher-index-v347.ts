import { parse, transformFromAstSync } from "@babel/core";
import _traverse from "@babel/traverse";
import { ClassBody, cloneNode } from "@babel/types";
import {
  classBody,
  classProperty,
  identifier,
  numericLiteral,
} from "@codemod/matchers";
import { readFileSync } from "fs";

interface ClassInfo {
  className?: string;
  found: boolean;
}
//@ts-expect-error https://github.com/babel/babel/discussions/13093#discussioncomment-563514
const traverse0: typeof _traverse = _traverse.default;

function translate_index_v347(source: string): string {
  const ast = parse(source, { sourceType: "module" });
  if (!ast) {
    return source;
  }
  const minimalClassMatcher = classBody([
    classProperty(identifier("angle"), numericLiteral(0)),
    classProperty(identifier("speed"), numericLiteral(0)),
    classProperty(identifier("fps"), numericLiteral(60)),
    // m.anything(), // Not needed to allow more after
  ]);

  const foundClassInfo: ClassInfo = { found: false };

  function minimalClassBodySlicer(node: ClassBody) {
    const slicedNode = cloneNode(node, false, false);
    slicedNode.body = slicedNode.body.splice(0, 3);
    return slicedNode;
  }

  traverse0(ast, {
    // class cE
    ClassDeclaration(path) {
      if (minimalClassMatcher.match(minimalClassBodySlicer(path.node.body))) {
        foundClassInfo.className = path.node.id?.name;
        foundClassInfo.found = true;
        path.stop();
      }
    },
    // let cE = class {
    ClassExpression(path) {
      if (
        !path.node.id &&
        minimalClassMatcher.match(minimalClassBodySlicer(path.node.body))
      ) {
        foundClassInfo.className = undefined;
        foundClassInfo.found = true;
        path.stop();
      }
    },
  });

  if (foundClassInfo.found) {
    console.log(
      "Found the target class:",
      foundClassInfo.className || "(anonymous)"
    );
  } else {
    console.log("Could not find a class matching the minimal signature.");
  }

  const { code } =
    transformFromAstSync(ast, source, {
      presets: ["@babel/preset-env"],
    }) || {};

  return code || source;
}

translate_index_v347(readFileSync("./public/index-v347-deob-short.js").toString());
