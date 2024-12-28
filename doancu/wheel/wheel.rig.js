import { Parser } from "acorn";
import { readFileSync, writeFileSync } from "fs";
import { traverse, builders, is as nodeIs } from "estree-toolkit";
import { generate, FORMAT_MINIFY } from "escodegen";
import obsfucator from "javascript-obfuscator";
const wholeFileNode = Parser.parse(
  readFileSync("./wheel.min.js", { encoding: "utf-8" }),
  { sourceType: "script", locations: false }
);
const wholeFileNode_Body = wholeFileNode.body;
const stringDecoder_Name = (function () {
  // const stringDecoder_VariableDeclaration = wholeFileNode.body[0]; // always first line in the code?
  const stringDecoder_VariableDeclaration = wholeFileNode_Body.filter(
    (node) => {
      if (node.type !== "VariableDeclaration") return false;
      if (node.kind !== "var") return false;
      if (node.declarations.length !== 1) return false;
      const stringDecoder_VariableDeclarator = node.declarations[0];
      if (stringDecoder_VariableDeclarator.init.type !== "Identifier")
        return false;
      const firstTraceName = stringDecoder_VariableDeclarator.init.name;
      const firstTrace_FunctionDeclaration = wholeFileNode_Body.filter(
        (node) =>
          node.type === "FunctionDeclaration" &&
          node.id.name === firstTraceName &&
          node.params.length === 2
      );
      if (firstTrace_FunctionDeclaration.length !== 1) return false;
      const firstTrace_Body = firstTrace_FunctionDeclaration[0].body.body;
      if (
        firstTrace_Body.length !== 2 ||
        firstTrace_Body[0].type !== "VariableDeclaration" ||
        firstTrace_Body[0].kind !== "var" ||
        firstTrace_Body[0].declarations.length !== 1 ||
        firstTrace_Body[1].type !== "ReturnStatement" ||
        firstTrace_Body[1].argument.type !== "SequenceExpression" ||
        firstTrace_Body[1].argument.expressions.length !== 2
      )
        return false;
      const firstTrace_ReturnCall = firstTrace_Body[1].argument.expressions[1];
      if (
        firstTrace_ReturnCall.type !== "CallExpression" ||
        firstTrace_ReturnCall.arguments.length !== 2 ||
        !firstTrace_ReturnCall.arguments.every(
          (a) => a.type === "Identifier"
        ) ||
        firstTrace_ReturnCall.callee.type !== "Identifier" ||
        firstTrace_ReturnCall.callee.name !== firstTraceName
      )
        return false;
      const firstTrace_StringList = firstTrace_Body[0].declarations[0];
      if (
        firstTrace_StringList.init.type !== "CallExpression" ||
        firstTrace_StringList.init.callee.type !== "Identifier" ||
        firstTrace_StringList.init.arguments.length !== 0
      )
        return false;
      const secondTraceName = firstTrace_StringList.init.callee.name;
      const secondTrace_FunctionDeclaration = wholeFileNode_Body.filter(
        (node) =>
          node.type === "FunctionDeclaration" &&
          node.id.name === secondTraceName &&
          node.params.length === 0
      );
      if (secondTrace_FunctionDeclaration.length !== 1) return false;
      const secondTrace_Body = secondTrace_FunctionDeclaration[0].body.body;
      if (
        secondTrace_Body.length !== 3 ||
        secondTrace_Body[0].type !== "VariableDeclaration" ||
        secondTrace_Body[0].kind !== "var" ||
        secondTrace_Body[0].declarations.length !== 1 ||
        secondTrace_Body[0].declarations[0].init.type !== "ArrayExpression" ||
        secondTrace_Body[0].declarations[0].init.elements.length !== 818 ||
        !secondTrace_Body[0].declarations[0].init.elements.every(
          (e) => e.type === "Literal"
        ) ||
        secondTrace_Body[1].type !== "ExpressionStatement" ||
        secondTrace_Body[1].expression.type !== "AssignmentExpression" ||
        secondTrace_Body[1].expression.operator !== "=" ||
        secondTrace_Body[1].expression.left.type !== "Identifier" ||
        secondTrace_Body[1].expression.left.name !== secondTraceName ||
        secondTrace_Body[1].expression.right.type !== "FunctionExpression" ||
        secondTrace_Body[1].expression.right.params.length !== 0 ||
        secondTrace_Body[2].type !== "ReturnStatement" ||
        secondTrace_Body[2].argument.type !== "CallExpression" ||
        secondTrace_Body[2].argument.arguments.length !== 0 ||
        secondTrace_Body[2].argument.callee.type !== "Identifier" ||
        secondTrace_Body[2].argument.callee.name !== secondTraceName
      )
        return false;
      return true;
    }
  );
  if (stringDecoder_VariableDeclaration.length !== 1) return null;
  const stringDecoder_Name =
    stringDecoder_VariableDeclaration[0]?.declarations?.[0]?.id?.name;
  return stringDecoder_Name;
})();
const loadWheel_Body = (function () {
  const loadWheel_FunctionDeclaration = wholeFileNode_Body.filter(
    (node) =>
      node.type === "FunctionDeclaration" &&
      node.async &&
      node.id.name === "loadWheel"
  );
  if (loadWheel_FunctionDeclaration.length !== 1) return null;
  const loadWheel_BlockStatement = loadWheel_FunctionDeclaration[0].body;
  return loadWheel_BlockStatement.body;
})();
const [calcCurrentSectorIndex_Name, sectorAngles_Name, currentWheelAngle_Name] =
  (function () {
    const failureReturn = [null, null];
    if (!loadWheel_Body) return failureReturn;
    const calcCurrentSectorIndex_VariableDeclaration = loadWheel_Body.filter(
      (node) =>
        node.type === "VariableDeclaration" &&
        node.kind === "const" &&
        node.declarations?.length === 1 &&
        node.declarations[0].init.type === "ArrowFunctionExpression"
    );
    if (calcCurrentSectorIndex_VariableDeclaration.length !== 1)
      return failureReturn;
    const calcCurrentSectorIndex_VariableDeclarator =
      calcCurrentSectorIndex_VariableDeclaration[0].declarations[0];
    const calcCurrentSectorIndexName =
      calcCurrentSectorIndex_VariableDeclarator.id.name;
    const arrowFunctionBlockStatement =
      calcCurrentSectorIndex_VariableDeclarator.init.body;
    const body = arrowFunctionBlockStatement.body;
    if (
      body.length !== 3 ||
      body[0].type !== "VariableDeclaration" ||
      body[1].type !== "ForStatement" ||
      body[2].type !== "ReturnStatement"
    )
      return failureReturn;
    const forStatement = body[1];
    const forStatementTest = forStatement.test;
    if (
      forStatementTest.type !== "BinaryExpression" ||
      forStatementTest.operator !== "<"
    )
      return failureReturn;
    const forStatementExpressionRightSide = forStatementTest.right;
    if (forStatementExpressionRightSide.type !== "MemberExpression")
      return failureReturn;
    const property = forStatementExpressionRightSide.property;
    if (property.type !== "Literal" || property.value !== "length")
      return failureReturn;
    if (forStatementExpressionRightSide.object.type !== "Identifier")
      return failureReturn;
    const sanityTrySectorAngle = forStatementExpressionRightSide.object.name;
    const forStatementBody = forStatement.body.body;
    if (
      forStatementBody.length !== 2 ||
      forStatementBody[0].type !== "ExpressionStatement" ||
      forStatementBody[1].type !== "IfStatement"
    )
      return failureReturn;
    const forStatementExpression = forStatementBody[0].expression;
    if (
      forStatementExpression.type !== "AssignmentExpression" ||
      forStatementExpression.operator !== "+="
    )
      return failureReturn;
    const inForStatementExpressionRightSide = forStatementExpression.right;
    if (
      inForStatementExpressionRightSide.type !== "MemberExpression" ||
      inForStatementExpressionRightSide.object.type !== "Identifier" ||
      inForStatementExpressionRightSide.property.type !== "Identifier"
    )
      return failureReturn;
    if (sanityTrySectorAngle !== inForStatementExpressionRightSide.object.name)
      return failureReturn;
    // continue the code
    const inForStatementIfStatement = forStatementBody[1];
    if (
      inForStatementIfStatement.test.type !== "BinaryExpression" ||
      inForStatementIfStatement.test.operator !== "<" ||
      inForStatementIfStatement.test.left.type !== "CallExpression" ||
      inForStatementIfStatement.test.left.callee.type !== "MemberExpression" ||
      inForStatementIfStatement.test.left.callee.object.type !== "Identifier" ||
      inForStatementIfStatement.test.left.callee.object.name !== "Math" ||
      inForStatementIfStatement.test.left.callee.property.type !== "Literal" ||
      inForStatementIfStatement.test.left.callee.property.value !== "abs"
    )
      return failureReturn;
    const absArgument = inForStatementIfStatement.test.left.arguments[0];
    if (absArgument.type !== "Identifier") return failureReturn;
    const currentWheelAngle_Name = absArgument.name;
    return [
      calcCurrentSectorIndexName,
      sanityTrySectorAngle,
      currentWheelAngle_Name,
    ];
  })();
const wheelSectors_Name = (function () {
  if (!loadWheel_Body) return null;
  const wheelSectors_VariableDeclaration = loadWheel_Body.filter((node) => {
    if (node.type !== "VariableDeclaration") return false;
    if (node.kind !== "var") return false;
    const declarations = node.declarations;
    if (declarations.length !== 1) return false;
    const init = node.declarations[0].init;
    if (init.type !== "ArrayExpression") return false;
    const elements = init.elements;
    if (elements.length !== 1) return false;
    const expression = elements[0];
    if (expression.type !== "ObjectExpression") return false;
    const properties = expression.properties;
    const defaultProperties = { text: "", id: 0x0, color: "#ADB2B0" };
    if (
      properties.length !== 3 ||
      !properties.every(
        (property) =>
          property.key.type === "Literal" &&
          property.value.type === "Literal" &&
          defaultProperties[property.key.value] === property.value.value
      )
    )
      return false;
    return true;
  });
  if (wheelSectors_VariableDeclaration.length !== 1) return null;
  const wheelSectors_VariableDeclarator =
    wheelSectors_VariableDeclaration[0].declarations[0];
  return wheelSectors_VariableDeclarator.id.name;
})();
const [spinAcceleration_Name, spinAccelerationRandomizer_Name] = (function () {
  const failureReturn = [null, null];
  if (!loadWheel_Body) return failureReturn;
  const spinElementClick_ExpressionStatement = loadWheel_Body.filter((node) => {
    if (node.type !== "ExpressionStatement") return false;
    const expression = node.expression;
    if (expression?.type !== "CallExpression") return false;
    const callee = expression.callee;
    if (callee.type !== "MemberExpression") return false;
    const property = callee.property;
    if (property.type !== "Literal" || property.value !== "addEventListener")
      return false;
    if (
      expression.arguments.length !== 2 ||
      expression.arguments[1].type !== "ArrowFunctionExpression"
    )
      return false;
    return true;
  });
  if (spinElementClick_ExpressionStatement.length !== 1) return failureReturn;
  const spinElementClick_listener_ArrowFunctionExpression =
    spinElementClick_ExpressionStatement[0].expression.arguments[1];
  const spinElementClick_listener_BlockStatement =
    spinElementClick_listener_ArrowFunctionExpression.body;
  const body = spinElementClick_listener_BlockStatement.body;
  const spinAccelerationZero = body[body.length - 1];
  if (spinAccelerationZero?.type !== "IfStatement") return failureReturn;
  const test = spinAccelerationZero.test;
  if (test.type !== "UnaryExpression" || test.operator !== "!")
    return failureReturn;
  const testArgument = test.argument;
  if (testArgument.type !== "Identifier") return failureReturn;
  const spinAccelerationName = testArgument.name;
  const consequent = spinAccelerationZero.consequent;
  if (consequent.type !== "ExpressionStatement") return failureReturn;
  const consequentExpression = consequent.expression;
  if (
    consequentExpression.type !== "AssignmentExpression" ||
    consequentExpression.operator !== "="
  )
    return failureReturn;
  const expressionRightSide = consequentExpression.right;
  const randFunctionCallee = expressionRightSide.callee;
  const randFunctionArguments = expressionRightSide.arguments;
  if (
    expressionRightSide.type !== "CallExpression" ||
    randFunctionCallee.type !== "Identifier" ||
    randFunctionArguments.length !== 2 ||
    !randFunctionArguments.every((argument) => argument.type === "Literal") ||
    randFunctionArguments[0].value >= randFunctionArguments[1].value
  )
    return failureReturn;
  const spinAccelerationRandomizerName = randFunctionCallee.name;
  return [spinAccelerationName, spinAccelerationRandomizerName];
})();
const [accelerationFactor_Name, stopThreshold_Value] = (function () {
  if (!loadWheel_Body) return [null, 1];
  for (const node of loadWheel_Body) {
    if (node.type !== "FunctionDeclaration") continue;
    if (node.params.length !== 0) continue;
    const body = node.body.body;
    if (
      body.length !== 5 ||
      body[0].type !== "VariableDeclaration" ||
      body[1].type !== "IfStatement" ||
      body[2].type !== "ExpressionStatement" ||
      body[3].type !== "IfStatement" ||
      body[4].type !== "ExpressionStatement"
    )
      continue;
    const spinAccelerationZero = body[1];
    const spinAccelerationZeroTest = spinAccelerationZero.test;
    if (
      spinAccelerationZeroTest.type !== "UnaryExpression" ||
      spinAccelerationZeroTest.operator !== "!" ||
      spinAccelerationZeroTest.argument.type !== "Identifier" ||
      spinAccelerationZeroTest.argument.name !== spinAcceleration_Name ||
      spinAccelerationZero.consequent.type !== "ReturnStatement" ||
      spinAccelerationZero.consequent.argument !== null
    )
      continue;
    const accelerateTickExpression = body[2].expression;
    if (
      accelerateTickExpression.type !== "AssignmentExpression" ||
      accelerateTickExpression.operator !== "*=" ||
      accelerateTickExpression.left.type !== "Identifier" ||
      accelerateTickExpression.left.name !== spinAcceleration_Name ||
      accelerateTickExpression.right.type !== "Identifier"
    )
      continue;
    const accelerationFactorName = accelerateTickExpression.right.name;
    const spinAccelerationThreshold = body[3];
    const spinAccelerationThresholdTest = spinAccelerationThreshold.test;
    if (
      spinAccelerationThresholdTest.type !== "BinaryExpression" ||
      spinAccelerationThresholdTest.operator !== "<" ||
      spinAccelerationThresholdTest.left.type !== "Identifier" ||
      spinAccelerationThresholdTest.left.name !== spinAcceleration_Name ||
      spinAccelerationThresholdTest.right.type !== "Literal"
    )
      continue;
    const spinAccelerationStopThresholdValue =
      spinAccelerationThresholdTest.right.value;
    if (
      spinAccelerationThreshold.consequent.type !== "BlockStatement" ||
      spinAccelerationThreshold.consequent.body.length < 2
    )
      continue;
    const spinAccelerationThresholdFirstStatement =
      spinAccelerationThreshold.consequent.body[0];
    const spinAccelerationThresholdFirstExpression =
      spinAccelerationThresholdFirstStatement.expression;
    if (
      spinAccelerationThresholdFirstStatement.type !== "ExpressionStatement" ||
      spinAccelerationThresholdFirstExpression.type !==
        "AssignmentExpression" ||
      spinAccelerationThresholdFirstExpression.operator !== "=" ||
      spinAccelerationThresholdFirstExpression.left.type !== "Identifier" ||
      spinAccelerationThresholdFirstExpression.left.name !==
        spinAcceleration_Name ||
      spinAccelerationThresholdFirstExpression.right.type !== "Literal" ||
      spinAccelerationThresholdFirstExpression.right.value !== 0
    )
      continue;
    return [accelerationFactorName, spinAccelerationStopThresholdValue];
  }
  return [null, null];
})();

const patchIdentifierMap = {
  stringDecoder: stringDecoder_Name,
  calcCurrentSectorIndex: calcCurrentSectorIndex_Name,
  sectorAngles: sectorAngles_Name,
  currentWheelAngle: currentWheelAngle_Name,
  wheelSectors: wheelSectors_Name,
  spinAcceleration: spinAcceleration_Name,
  originalFunction: spinAccelerationRandomizer_Name,
  accelerationFactor: accelerationFactor_Name,
};
const patchValueMap = {
  riggedIndexes: [],
  riggedValues: ["Mai", "Hương", "Giang"],
  stopThreshold: stopThreshold_Value,
};
const patchFunctionExpression = Parser.parse(
  readFileSync("./wheel.patch.js", { encoding: "utf-8" }),
  { sourceType: "script" }
).body[0].expression;
traverse(patchFunctionExpression, {
  // _astreplace_identifier_* is  replaced to an identifier within the scope of the original code
  Identifier(path) {
    if (!path.node.name.startsWith("_astreplace_")) return;
    const [type, name] = path.node.name.slice(12).split("_");
    switch (type) {
      case "identifier":
        path.replaceWith(
          patchIdentifierMap[name] != null
            ? builders.identifier(patchIdentifierMap[name])
            : builders.literal(null)
        );
        break;
    }
  },
  // _astreplace_value_* is replaced to a constant defined locally
  VariableDeclarator(path) {
    if (
      !nodeIs.identifier(path.node.id) ||
      !path.node.id.name.startsWith("_astreplace_") ||
      path.node.init.name !== "undefined"
    )
      return;
    const [type, name] = path.node.id.name.slice(12).split("_");
    switch (type) {
      case "value":
        path.replaceWith(
          builders.variableDeclarator(
            structuredClone(path.node.id),
            patchValueMap[name] != null
              ? Parser.parse(JSON.stringify(patchValueMap[name]), {
                  sourceType: "script",
                }).body[0].expression
              : builders.literal(null)
          )
        );
        break;
    }
  },
});

const patchFunctionExpressionString = generate(patchFunctionExpression, {
  format: FORMAT_MINIFY,
});
// obfuscate it so it looks like the original code, but minimize its effects
// (use only identifierNamesGenerator: 'hexadecimal')
const obfuscatedPatchFunctionString = obsfucator
  .obfuscate(patchFunctionExpressionString, {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: false,
    // only use this
    identifierNamesGenerator: "hexadecimal",
    ignoreImports: true,
    log: false,
    numbersToExpressions: false,
    renameGlobals: false,
    renameProperties: false,
    // expect same obfuscation result
    seed: 1,
    selfDefending: false,
    simplify: true,
    sourceMap: false,
    splitStrings: false,
    stringArray: false,
    target: "browser",
    transformObjectKeys: false,
    unicodeEscapeSequence: false,
  })
  .getObfuscatedCode();

const obfuscatedPatchFunctionExpression = Parser.parse(
  obfuscatedPatchFunctionString,
  { sourceType: "script" }
).body[0].expression;

traverse(loadWheel_Body, {
  VariableDeclarator(path) {
    if (
      !nodeIs.identifier(path.node.id) ||
      path.node.id.name !== spinAccelerationRandomizer_Name
    )
      return;
    path.replaceWith(
      builders.variableDeclarator(
        structuredClone(path.node.id),
        obfuscatedPatchFunctionExpression
      )
    );
    this.stop();
  },
});
writeFileSync(
  "./wheel.replace.js",
  generate(obfuscatedPatchFunctionExpression, { format: FORMAT_MINIFY }),
  { encoding: "utf-8" }
);
writeFileSync(
  "./wheel.complete.js",
  generate(wholeFileNode, { format: FORMAT_MINIFY }),
  { encoding: "utf-8" }
);
