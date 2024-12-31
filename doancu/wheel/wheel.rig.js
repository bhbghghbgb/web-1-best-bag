import { Parser } from "acorn";
import { traverse, builders, is as nodeIs } from "estree-toolkit";
import { generate, FORMAT_MINIFY } from "escodegen";
import obsfucator from "javascript-obfuscator";

function translate(wheelDeobJs, wheelPatchJs, wheelPatch2Js, riggedValues) {
  const wholeFileNode = Parser.parse(wheelDeobJs, { sourceType: "script" });
  const wholeFileNode_Body = wholeFileNode.body;

  // locate names, identifiers, values, commonly accessed nodes in the original code
  const loadWheel_Body = (function () {
    const loadWheel_FunctionDeclaration = wholeFileNode_Body.find(
      (node) =>
        node.type === "FunctionDeclaration" &&
        node.async &&
        node.id.name === "loadWheel"
    );
    if (!loadWheel_FunctionDeclaration) return null;
    const loadWheel_BlockStatement = loadWheel_FunctionDeclaration.body;
    return loadWheel_BlockStatement.body;
  })();
  const [
    calcCurrentSectorIndex_Name,
    sectorAngles_Name,
    currentWheelAngle_Name,
    calcCurrentSectorIndex_VariableDeclaration,
  ] = (function () {
    const failureReturn = [null, null, null, null];
    if (!loadWheel_Body) return failureReturn;
    const calcCurrentSectorIndex_VariableDeclaration = loadWheel_Body.find(
      (node) =>
        nodeIs.variableDeclaration(node, { kind: "const" }) &&
        node.declarations.length === 1 &&
        node.declarations[0].init.type === "ArrowFunctionExpression" &&
        node.declarations[0].init.params.length === 0
    );
    if (!calcCurrentSectorIndex_VariableDeclaration) return failureReturn;
    const calcCurrentSectorIndex_VariableDeclarator =
      calcCurrentSectorIndex_VariableDeclaration.declarations[0];
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
    if (property.type !== "Identifier" || property.name !== "length")
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
      !nodeIs.binaryExpression(inForStatementIfStatement.test, {
        operator: "<",
      }) ||
      !nodeIs.callExpression(inForStatementIfStatement.test.left) ||
      !nodeIs.memberExpression(inForStatementIfStatement.test.left.callee) ||
      !nodeIs.identifier(inForStatementIfStatement.test.left.callee.object, {
        name: "Math",
      }) ||
      !nodeIs.identifier(inForStatementIfStatement.test.left.callee.property, {
        name: "abs",
      })
    )
      return failureReturn;
    const absArgument = inForStatementIfStatement.test.left.arguments[0];
    if (absArgument.type !== "Identifier") return failureReturn;
    const currentWheelAngle_Name = absArgument.name;
    return [
      calcCurrentSectorIndexName,
      sanityTrySectorAngle,
      currentWheelAngle_Name,
      calcCurrentSectorIndex_VariableDeclaration,
    ];
  })();
  const wheelSectors_Name = (function () {
    if (!loadWheel_Body) return null;
    const wheelSectors_VariableDeclaration = loadWheel_Body.find((node) => {
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
            nodeIs.identifier(property.key) &&
            nodeIs.literal(property.value, {
              value: defaultProperties[property.key.name],
            })
        )
      )
        return false;
      return true;
    });
    if (!wheelSectors_VariableDeclaration) return null;
    const wheelSectors_VariableDeclarator =
      wheelSectors_VariableDeclaration.declarations[0];
    return wheelSectors_VariableDeclarator.id.name;
  })();
  const [
    spinAcceleration_Name,
    spinAccelerationRandomizer_Name,
    updateWheelIntervalId_Name,
    updateWheelClearInterval_Expression,
  ] = (function () {
    const failureReturn = [null, null, null, null];
    if (!loadWheel_Body) return failureReturn;
    const spinElementClick_ExpressionStatement = loadWheel_Body.find((node) => {
      if (node.type !== "ExpressionStatement") return false;
      const expression = node.expression;
      if (expression?.type !== "CallExpression") return false;
      const callee = expression.callee;
      if (callee.type !== "MemberExpression") return false;
      const property = callee.property;
      if (!nodeIs.identifier(property, { name: "addEventListener" }))
        return false;
      if (
        expression.arguments.length !== 2 ||
        !nodeIs.literal(expression.arguments[0], { value: "click" }) ||
        expression.arguments[1].type !== "ArrowFunctionExpression"
      )
        return false;
      return true;
    });
    if (!spinElementClick_ExpressionStatement) return failureReturn;
    const spinElementClick_listener_ArrowFunctionExpression =
      spinElementClick_ExpressionStatement.expression.arguments[1];
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
    if (
      !nodeIs.blockStatement(consequent) ||
      !nodeIs.expressionStatement(consequent.body[0])
    )
      return failureReturn;
    const consequentExpression = consequent.body[0].expression;
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
    const clearInvervalExpression = body.find(
      (node) =>
        nodeIs.expressionStatement(node) &&
        nodeIs.callExpression(node.expression) &&
        nodeIs.identifier(node.expression.callee, { name: "clearInterval" }) &&
        node.expression.arguments.length === 1 &&
        nodeIs.identifier(node.expression.arguments[0])
    );
    if (!clearInvervalExpression) return failureReturn;
    const clearIntervalIdName =
      clearInvervalExpression.expression.arguments[0].name;
    return [
      spinAccelerationName,
      spinAccelerationRandomizerName,
      clearIntervalIdName,
      clearInvervalExpression,
    ];
  })();
  const [accelerationFactor_Name, stopThreshold_Value] = (function () {
    if (!loadWheel_Body) return [null, null];
    for (const node of loadWheel_Body) {
      if (node.type !== "FunctionDeclaration") continue;
      if (node.params.length !== 0) continue;
      const body = node.body.body;
      if (
        body.length !== 6 ||
        body[0].type !== "IfStatement" ||
        body[1].type !== "ExpressionStatement" ||
        body[2].type !== "IfStatement" ||
        body[3].type !== "ExpressionStatement" ||
        body[4].type !== "ExpressionStatement" ||
        body[5].type !== "ExpressionStatement"
      )
        continue;
      const spinAccelerationZero = body[0];
      const spinAccelerationZeroTest = spinAccelerationZero.test;
      if (
        spinAccelerationZeroTest.type !== "UnaryExpression" ||
        spinAccelerationZeroTest.operator !== "!" ||
        spinAccelerationZeroTest.argument.type !== "Identifier" ||
        spinAccelerationZeroTest.argument.name !== spinAcceleration_Name ||
        !nodeIs.blockStatement(spinAccelerationZero.consequent) ||
        !nodeIs.returnStatement(spinAccelerationZero.consequent.body[0], {
          argument: null,
        })
      )
        continue;
      const accelerateTickExpression = body[1].expression;
      if (
        accelerateTickExpression.type !== "AssignmentExpression" ||
        accelerateTickExpression.operator !== "*=" ||
        accelerateTickExpression.left.type !== "Identifier" ||
        accelerateTickExpression.left.name !== spinAcceleration_Name ||
        accelerateTickExpression.right.type !== "Identifier"
      )
        continue;
      const accelerationFactorName = accelerateTickExpression.right.name;
      const spinAccelerationThreshold = body[2];
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
        spinAccelerationThresholdFirstStatement.type !==
          "ExpressionStatement" ||
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
  const updateWheelDisplay_Name = (function () {
    const updateWheelDisplay_FunctionDeclaration = loadWheel_Body.find(
      (node) => {
        if (!nodeIs.functionDeclaration(node)) return false;
        const body = node.body.body;
        for (node of body) {
          if (!nodeIs.variableDeclaration(node, { kind: "const" })) continue;
          const init = node.declarations[0].init;
          if (
            !nodeIs.memberExpression(init) ||
            !nodeIs.identifier(init.object, { name: wheelSectors_Name }) ||
            !nodeIs.callExpression(init.property) ||
            !nodeIs.identifier(init.property.callee, {
              name: calcCurrentSectorIndex_Name,
            })
          )
            continue;
          return true;
        }
        return false;
      }
    );
    if (!updateWheelDisplay_FunctionDeclaration) return null;
    return updateWheelDisplay_FunctionDeclaration.id.name;
  })();
  // input settings for the patched function
  const patchIdentifierMap = {
    calcCurrentSectorIndex: calcCurrentSectorIndex_Name,
    sectorAngles: sectorAngles_Name,
    currentWheelAngle: currentWheelAngle_Name,
    wheelSectors: wheelSectors_Name,
    spinAcceleration: spinAcceleration_Name,
    updateWheelIntervalId: updateWheelIntervalId_Name,
    originalFunction: spinAccelerationRandomizer_Name,
    accelerationFactor: accelerationFactor_Name,
    updateWheelDisplay: updateWheelDisplay_Name,
    riggedSectorIndexes: "_astinsert_identifier_riggedSectorIndexes",
  };
  const patchValueMap = {
    riggedIndexes: [],
    riggedValues,
    stopThreshold: stopThreshold_Value,
  };
  console.log({ patchIdentifierMap, patchValueMap });
  debugger;
  // replace the identifiers and values in the patched function
  const randomizerPatchFunctionExpression = Parser.parse(wheelPatchJs, {
    sourceType: "script",
  }).body[0].expression;
  traverse(randomizerPatchFunctionExpression, {
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

  // replace spinAccelerationRandomizer declaration with the patched function
  (() => {
    for (const node of loadWheel_Body) {
      if (nodeIs.variableDeclaration(node, { kind: "const" })) {
        const index = node.declarations.findIndex(
          (declaration) =>
            nodeIs.identifier(declaration.id) &&
            declaration.id.name === spinAccelerationRandomizer_Name
        );
        if (index !== -1)
          node.declarations[index] = builders.variableDeclarator(
            structuredClone(node.declarations[index].id),
            randomizerPatchFunctionExpression
          );
        break;
      }
    }
  })();

  // replace the identifiers and values in the patched function
  const sectorIndexPatchFunctionExpression = Parser.parse(wheelPatch2Js, {
    sourceType: "script",
  }).body[0].expression;
  traverse(sectorIndexPatchFunctionExpression, {
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
  });
  (() => {
    // patch the code inside spinElementClickListener so it sets the interval id to null
    // after calling clearInterval, this allows us to test it and restore the original functionality
    // of calcCurrentSectorIndex when loadWheel is called again
    const clearIntervalCallExpression =
      updateWheelClearInterval_Expression.expression;
    // now we explicitly set it to null after calling clearInterval
    // replace the node with a sequence expression so we don't have to insert nodes
    // in the middle
    traverse(updateWheelClearInterval_Expression, {
      CallExpression(path) {
        if (!nodeIs.identifier(path.node.callee, { name: "clearInterval" }))
          return;
        path.replaceWith(
          builders.sequenceExpression([
            structuredClone(clearIntervalCallExpression),
            builders.assignmentExpression(
              "=",
              builders.identifier(updateWheelIntervalId_Name),
              builders.literal(null)
            ),
          ])
        );
        this.stop();
      },
    });
    // patches the calcCurrentSectorIndex function
    traverse(calcCurrentSectorIndex_VariableDeclaration, {
      ArrowFunctionExpression(path) {
        const declarator = path.findParent((node) =>
          nodeIs.variableDeclarator(node)
        );
        if (
          !nodeIs.identifier(declarator.node.id, {
            name: calcCurrentSectorIndex_Name,
          })
        )
          return;
        path.replaceWith(sectorIndexPatchFunctionExpression);
        this.stop();
      },
    });
    // find a var or let variable declaration and borrow it to initialize
    // _astinsert_identifier_riggedSectorIndexes
    // try to settle it nearby for easy debugging
    const indexInBody = loadWheel_Body.findIndex(
      (node) => node === calcCurrentSectorIndex_VariableDeclaration
    );
    if (indexInBody === -1) return;
    for (let i = 2; i <= loadWheel_Body.length / 2; i++) {
      const j = i % 2 === 0 ? i / 2 : -i / 2;
      const nearbyVariableDeclaration = loadWheel_Body[indexInBody + j];
      if (
        !nodeIs.variableDeclaration(nearbyVariableDeclaration, {
          kind: "var",
        }) &&
        !nodeIs.variableDeclaration(nearbyVariableDeclaration, { kind: "let" })
      )
        continue;
      const nodesToInsert = [
        builders.variableDeclarator(
          builders.identifier(patchIdentifierMap.riggedSectorIndexes),
          builders.arrayExpression([])
        ),
      ];
      traverse(nearbyVariableDeclaration, {
        VariableDeclaration(path) {
          if (j < 0) path.pushContainer("declarations", nodesToInsert);
          else path.unshiftContainer("declarations", nodesToInsert);
          this.stop();
        },
      });
      break;
    }
  })();
  // reobfuscate to make final code looks like original, but minimize techniques used
  const obfuscationOptions = {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: false,
    // too obvious
    identifierNamesGenerator: "hexadecimal",
    ignoreImports: true,
    log: false,
    numbersToExpressions: false,
    renameGlobals: false,
    renameProperties: false,
    // expect same obfuscation result
    seed: 1,
    selfDefending: false,
    // lowers code size a bit
    simplify: true,
    // source is already obfuscated lol
    sourceMap: false,
    splitStrings: false,
    // allows to add some weird code on top of the file, makes it less obvious
    stringArray: true,
    // disable all string array options
    stringArrayCallsTransform: false,
    stringArrayCallsTransformThreshold: Number.EPSILON,
    stringArrayEncoding: [],
    // `stringArrayIndexesType` errors:
    // - stringArrayIndexesType should not be empty
    stringArrayIndexesType: ["hexadecimal-number"],
    stringArrayIndexShift: false,
    // only this one adds
    stringArrayRotate: true,
    stringArrayShuffle: false,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    // `stringArrayWrappersParametersMaxCount` errors:
    // - stringArrayWrappersParametersMaxCount must not be less than 2
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: "variable",
    stringArrayThreshold: Number.EPSILON,
    // nothing relies on node
    target: "browser",
    transformObjectKeys: false,
    unicodeEscapeSequence: false,
  };
  const sourceComplete = generate(wholeFileNode, { format: FORMAT_MINIFY });
  return {
    sourceComplete,
    sourceCompleteObfuscated: obsfucator
      .obfuscate(sourceComplete, obfuscationOptions)
      .getObfuscatedCode(),
  };
}

export { translate };
