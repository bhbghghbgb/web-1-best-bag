import { Parser } from "acorn";
import { FORMAT_DEFAULTS, FORMAT_MINIFY, generate } from "escodegen";
import { builders, is as nodeIs, traverse } from "estree-toolkit";
import jsesc from "jsesc";
import { minify } from "terser";

const FORMAT_DEFAULT = {
  ...FORMAT_DEFAULTS,
  indent: { ...FORMAT_DEFAULTS.indent, style: "  " },
};

class TranslationNodeLocateError extends Error {
  constructor(locating, path, msg) {
    super(`Locating: ${locating}, path: ${path}, info: ${msg}`);
    Object.setPrototypeOf(this, TranslationNodeLocateError.prototype);
  }
}

class TranslationArgumentError extends Error {
  constructor(name, msg) {
    super(`Arg: ${name}, info: ${msg}`);
    Object.setPrototypeOf(this, TranslationArgumentError.prototype);
  }
}
/**
 *
 * @param {string} deobfuscatedSource
 * @param {string} clairvoyancePatch
 * @param {string} snapPatch
 * @param {string} reinitPatch
 * @param {string} scripterTemplate
 * @param {string[]} riggingValues
 * @returns {Promise<{patchedAsSource: string, patchedAsUserscript: string}>}
 */
export async function translate(
  deobfuscatedSource,
  clairvoyancePatch,
  snapPatch,
  reinitPatch,
  scripterTemplate,
  riggingValues
) {
  const { riggedIndexes, riggedNames } = parseRiggingValues(riggingValues);
  const {
    randomizer: randomizerPatchFunctionExpression,
    sectorIndex: sectorIndexPatchFunctionExpression,
    afterScriptLoad: afterScriptLoadFunctionExpression,
  } = parsePatchesToAst(clairvoyancePatch, snapPatch, reinitPatch);
  const wholeFileNode = findFileNode(deobfuscatedSource);
  const wholeFileNode_Body = wholeFileNode.body;
  // locate names, identifiers, values, commonly accessed nodes in the original code
  const loadWheel_Body = findLoadWheelBody(wholeFileNode_Body);
  const [
    calcCurrentSectorIndex_Name,
    sectorAngles_Name,
    currentWheelAngle_Name,
    calcCurrentSectorIndex_VariableDeclaration,
  ] = locateInLoadWheelBy_calcCurrentSectorIndex(loadWheel_Body);
  const wheelSectors_Name = locateInLoadWheelBy_wheelSectors(loadWheel_Body);
  const [
    spinAcceleration_Name,
    spinAccelerationRandomizer_Name,
    updateWheelIntervalId_Name,
    updateWheelClearInterval_Expression,
  ] = locateInLoadWheelBy_spinElementClick(loadWheel_Body);
  const [accelerationFactor_Name, stopThreshold_Value] =
    locateInLoadWheelBy_spinAccelerationIsZeroTest(
      loadWheel_Body,
      spinAcceleration_Name
    );
  const updateWheelDisplay_Name = locateInLoadWheelBy_updateWheelDisplay(
    loadWheel_Body,
    wheelSectors_Name,
    calcCurrentSectorIndex_Name
  );
  const afterScriptLoadFunctions =
    findAfterScriptLoadFunctions(wholeFileNode_Body);

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
    riggedIndexes,
    riggedNames,
    stopThreshold: stopThreshold_Value,
  };

  const patchAstNodeMap = { afterScriptLoadFunctions };

  // replace the identifiers and values in the patched function
  populateRandomizerPatch(
    randomizerPatchFunctionExpression,
    patchIdentifierMap,
    patchValueMap
  );
  // replace spinAccelerationRandomizer declaration with the patched function
  patchLoadWheelWithRandomizer(
    loadWheel_Body,
    spinAccelerationRandomizer_Name,
    randomizerPatchFunctionExpression
  );
  // replace the identifiers and values in the patched function
  populateSectorIndexPatch(
    sectorIndexPatchFunctionExpression,
    patchIdentifierMap
  );
  patchLoadWheelWithSectorIndex(
    updateWheelClearInterval_Expression,
    updateWheelIntervalId_Name,
    calcCurrentSectorIndex_VariableDeclaration,
    calcCurrentSectorIndex_Name,
    sectorIndexPatchFunctionExpression,
    loadWheel_Body,
    patchIdentifierMap
  );

  // replace the identifiers and values in the patched function
  populateAfterScriptLoadPatch(
    afterScriptLoadFunctionExpression,
    patchAstNodeMap
  );
  const patchedAsSource =
    /** @type {string} */
    generatePatchedSource(wholeFileNode);
  // an userscript version requires rerunning the DOMContentLoaded listeners
  // of the original source code, because we can only inject it after 'load'
  // event has fired or some required globals wouldn't have been initialized
  const patchedAsUserscript = /** @type {string} */ await generateUserscript(
    wholeFileNode_Body,
    afterScriptLoadFunctionExpression,
    wholeFileNode,
    scripterTemplate
  );
  return { patchedAsSource, patchedAsUserscript };
}
function generatePatchedSource(wholeFileNode) {
  console.debug(
    "[patcher]:generatePatchedSource - Generating patched source from AST",
    { wholeFileNode }
  );
  const patchedSource = generate(wholeFileNode, {
    format: FORMAT_DEFAULT,
  });
  console.debug("[patcher]:generatePatchedSource - Generated patched source", {
    result: patchedSource,
  });
  return patchedSource;
}

async function generateUserscript(
  wholeFileNode_Body,
  afterScriptLoadFunctionExpression,
  wholeFileNode,
  scripterTemplate
) {
  console.debug(
    "[patcher]:generateUserscript - Generating userscript with after script load function",
    {
      wholeFileNode_Body,
      afterScriptLoadFunctionExpression,
      wholeFileNode,
      scripterTemplate,
    }
  );
  wholeFileNode_Body.push(afterScriptLoadFunctionExpression);
  const sourceForUserScriptInject = generate(wholeFileNode, {
    format: FORMAT_MINIFY,
  });
  console.debug(
    "[patcher]:generateUserscript - Generated source for userscript inject",
    { sourceForUserScriptInject }
  );
  const sourceForUserScriptInjectMinified = await minify(
    sourceForUserScriptInject,
    { ecma: 2020 }
  );
  console.debug(
    "[patcher]:generateUserscript - Minified source for userscript inject",
    { sourceForUserScriptInjectMinified }
  );
  const sourceForUserScriptInjectEscaped = jsesc(
    sourceForUserScriptInjectMinified.code,
    { quotes: "single", minimal: true }
  );
  console.debug(
    "[patcher]:generateUserscript - Escaped source for userscript inject",
    { sourceForUserScriptInjectEscaped }
  );
  const patchedAsUserscript = /** @type {string} */ scripterTemplate.replace(
    "_strreplace_completesource",
    sourceForUserScriptInjectEscaped
  );
  console.debug(
    "[patcher]:generateUserscript - Replaced scripter template with source",
    { patchedAsUserscript }
  );
  return patchedAsUserscript;
}

function populateAfterScriptLoadPatch(
  afterScriptLoadFunctionExpression,
  patchAstNodeMap
) {
  console.debug(
    "[patcher]:populateAfterScriptLoadPatch - Populating after script load patch with functions",
    { afterScriptLoadFunctionExpression, patchAstNodeMap }
  );
  traverse(afterScriptLoadFunctionExpression, {
    // _astreplace_functions_* is replaced to an array of functions defined locally
    VariableDeclarator(path) {
      if (
        !nodeIs.identifier(path.node.id) ||
        !path.node.id.name.startsWith("_astreplace_") ||
        path.node.init.name !== "undefined"
      )
        return;
      const [type, name] = path.node.id.name.slice(12).split("_");
      switch (type) {
        case "functions":
          path.replaceWith(
            builders.variableDeclarator(
              structuredClone(path.node.id),
              patchAstNodeMap[name] != null
                ? builders.arrayExpression(
                    patchAstNodeMap[name].map((func) => structuredClone(func))
                  )
                : builders.literal(null)
            )
          );
          break;
      }
    },
  });
}

function patchLoadWheelWithSectorIndex(
  updateWheelClearInterval_Expression,
  updateWheelIntervalId_Name,
  calcCurrentSectorIndex_VariableDeclaration,
  calcCurrentSectorIndex_Name,
  sectorIndexPatchFunctionExpression,
  loadWheel_Body,
  patchIdentifierMap
) {
  console.debug(
    "[patcher]:patchLoadWheelWithSectorIndex - Patching loadWheel with sector index",
    {
      updateWheelClearInterval_Expression,
      updateWheelIntervalId_Name,
      calcCurrentSectorIndex_VariableDeclaration,
      calcCurrentSectorIndex_Name,
      sectorIndexPatchFunctionExpression,
      loadWheel_Body,
      patchIdentifierMap,
    }
  );

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
      if (
        !nodeIs.identifier(path.node.callee, {
          name: "clearInterval",
        })
      )
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
      !nodeIs.variableDeclaration(nearbyVariableDeclaration, {
        kind: "let",
      })
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
}

function populateSectorIndexPatch(
  sectorIndexPatchFunctionExpression,
  patchIdentifierMap
) {
  console.debug(
    "[patcher]:populateSectorIndexPatch - Populating sector index patch with identifiers",
    { sectorIndexPatchFunctionExpression, patchIdentifierMap }
  );
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
}

function patchLoadWheelWithRandomizer(
  loadWheel_Body,
  spinAccelerationRandomizer_Name,
  randomizerPatchFunctionExpression
) {
  console.debug(
    "[patcher]:patchLoadWheelWithRandomizer - Patching loadWheel with randomizer",
    {
      spinAccelerationRandomizer_Name,
      randomizerPatchFunctionExpression,
    }
  );
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
}

function populateRandomizerPatch(
  randomizerPatchFunctionExpression,
  patchIdentifierMap,
  patchValueMap
) {
  console.debug(
    "[patcher]:populateRandomizerPatch - Populating randomizer patch with identifiers and values",
    { randomizerPatchFunctionExpression, patchIdentifierMap, patchValueMap }
  );
  traverse(randomizerPatchFunctionExpression, {
    // _astreplace_identifier_* is replaced to an identifier within the scope of the original code
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
                    ecmaVersion: 2022,
                    sourceType: "script",
                  }).body[0].expression
                : builders.literal(null)
            )
          );
          break;
      }
    },
  });
}

function locateInLoadWheelBy_updateWheelDisplay(
  loadWheel_Body,
  wheelSectors_Name,
  calcCurrentSectorIndex_Name
) {
  const updateWheelDisplay_FunctionDeclaration = loadWheel_Body.find((node) => {
    if (!nodeIs.functionDeclaration(node)) return false;
    const body = node.body.body;
    for (node of body) {
      if (!nodeIs.variableDeclaration(node, { kind: "const" })) continue;
      const init = node.declarations[0].init;
      if (
        !nodeIs.memberExpression(init) ||
        !nodeIs.identifier(init.object, {
          name: wheelSectors_Name,
        }) ||
        !nodeIs.callExpression(init.property) ||
        !nodeIs.identifier(init.property.callee, {
          name: calcCurrentSectorIndex_Name,
        })
      )
        continue;
      return true;
    }
    return false;
  });
  if (!updateWheelDisplay_FunctionDeclaration)
    throw new TranslationNodeLocateError(
      "updateWheelDisplay",
      "loadWheel_Body",
      "No children matching filter"
    );
  console.debug(
    "[patcher]:locateInLoadWheelBy_updateWheelDisplay - Located updateWheelDisplay function",
    {
      updateWheelDisplayName: updateWheelDisplay_FunctionDeclaration.id.name,
      wheelSectors_Name,
      calcCurrentSectorIndex_Name,
    }
  );
  return updateWheelDisplay_FunctionDeclaration.id.name;
}

function locateInLoadWheelBy_spinAccelerationIsZeroTest(
  loadWheel_Body,
  spinAcceleration_Name
) {
  if (!loadWheel_Body)
    throw new TranslationNodeLocateError(
      "spinAccelerationZeroTest",
      "loadWheel_Body",
      "type FunctionDeclaration"
    );
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
    console.debug(
      "[patcher]:locateInLoadWheelBy_spinAccelerationIsZeroTest - Located spinAccelerationZeroTest",
      {
        accelerationFactorName,
        spinAccelerationStopThresholdValue,
      }
    );
    return [accelerationFactorName, spinAccelerationStopThresholdValue];
  }
  throw new TranslationNodeLocateError(
    "spinAccelerationZeroTest",
    "loadWheel_Body",
    "No children matching filter"
  );
}

function locateInLoadWheelBy_spinElementClick(loadWheel_Body) {
  if (!loadWheel_Body)
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "loadWheel_Body",
      "type ExpressionStatement"
    );
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
      !nodeIs.literal(expression.arguments[0], {
        value: "click",
      }) ||
      expression.arguments[1].type !== "ArrowFunctionExpression"
    )
      return false;
    return true;
  });
  if (!spinElementClick_ExpressionStatement)
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement"
    );
  const spinElementClick_listener_ArrowFunctionExpression =
    spinElementClick_ExpressionStatement.expression.arguments[1];
  const spinElementClick_listener_BlockStatement =
    spinElementClick_listener_ArrowFunctionExpression.body;
  const body = spinElementClick_listener_BlockStatement.body;
  const spinAccelerationZero = body[body.length - 1];
  if (spinAccelerationZero?.type !== "IfStatement")
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement spinAccelerationZero",
      "Unexpected last body statement type"
    );
  const test = spinAccelerationZero.test;
  if (test.type !== "UnaryExpression" || test.operator !== "!")
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement spinAccelerationZero test",
      "Unexpected expression type"
    );
  const testArgument = test.argument;
  if (testArgument.type !== "Identifier")
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement spinAccelerationZero test argument",
      "Unexpected id type"
    );
  const spinAccelerationName = testArgument.name;
  const consequent = spinAccelerationZero.consequent;
  if (
    !nodeIs.blockStatement(consequent) ||
    !nodeIs.expressionStatement(consequent.body[0])
  )
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement spinAccelerationZero test consequent",
      "Unexpected first body statement type"
    );
  const consequentExpression = consequent.body[0].expression;
  if (
    consequentExpression.type !== "AssignmentExpression" ||
    consequentExpression.operator !== "="
  )
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement spinAccelerationZero test consequent body[0].expression",
      "Unexpected expression type"
    );
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
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement spinAccelerationZero test consequent body[0].expression right callee arguments",
      "Unexpected expression (complicated)"
    );
  const spinAccelerationRandomizerName = randFunctionCallee.name;
  const clearInvervalExpression = body.find(
    (node) =>
      nodeIs.expressionStatement(node) &&
      nodeIs.callExpression(node.expression) &&
      nodeIs.identifier(node.expression.callee, {
        name: "clearInterval",
      }) &&
      node.expression.arguments.length === 1 &&
      nodeIs.identifier(node.expression.arguments[0])
  );
  if (!clearInvervalExpression)
    throw new TranslationNodeLocateError(
      "spinElementClick",
      "ExpressionStatement clearInvervalExpression",
      "Unexpected statement (complicated)"
    );
  const clearIntervalIdName =
    clearInvervalExpression.expression.arguments[0].name;
  console.debug(
    "[patcher]:locateInLoadWheelBy_spinElementClick - Located spinElementClick listener",
    {
      spinAccelerationName,
      spinAccelerationRandomizerName,
      clearIntervalIdName,
      clearInvervalExpression,
    }
  );
  return [
    spinAccelerationName,
    spinAccelerationRandomizerName,
    clearIntervalIdName,
    clearInvervalExpression,
  ];
}

function locateInLoadWheelBy_wheelSectors(loadWheel_Body) {
  if (!loadWheel_Body)
    throw new TranslationNodeLocateError(
      "wheelSectors",
      "loadWheel_Body",
      "type VariableDeclaration"
    );
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
  if (!wheelSectors_VariableDeclaration)
    throw new TranslationNodeLocateError("wheelSectors", "VariableDeclaration");
  const wheelSectors_VariableDeclarator =
    wheelSectors_VariableDeclaration.declarations[0];
  const wheelSectorsName = wheelSectors_VariableDeclarator.id.name;
  console.debug(
    "[patcher]:locateInLoadWheelBy_wheelSectors - Located wheelSectors variable",
    { wheelSectorsName, wheelSectors_VariableDeclaration }
  );
  return wheelSectorsName;
}

function locateInLoadWheelBy_calcCurrentSectorIndex(loadWheel_Body) {
  if (!loadWheel_Body)
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "loadWheel_Body",
      "type VariableDeclaration"
    );
  const calcCurrentSectorIndex_VariableDeclaration = loadWheel_Body.find(
    (node) =>
      nodeIs.variableDeclaration(node, { kind: "const" }) &&
      node.declarations.length === 1 &&
      node.declarations[0].init.type === "ArrowFunctionExpression" &&
      node.declarations[0].init.params.length === 0
  );
  if (!calcCurrentSectorIndex_VariableDeclaration)
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "VariableDeclaration"
    );
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
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "BlockStatement arrowFunction",
      "Unexpected body length"
    );
  const forStatement = body[1];
  const forStatementTest = forStatement.test;
  if (
    forStatementTest.type !== "BinaryExpression" ||
    forStatementTest.operator !== "<"
  )
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1] Test",
      "Unexpected test expression"
    );
  const forStatementExpressionRightSide = forStatementTest.right;
  if (forStatementExpressionRightSide.type !== "MemberExpression")
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1] ExpressionRightSide",
      "Unexpected expression type"
    );
  const property = forStatementExpressionRightSide.property;
  if (property.type !== "Identifier" || property.name !== "length")
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1] ExpressionRightSide property",
      "Unexpected property id type"
    );
  if (forStatementExpressionRightSide.object.type !== "Identifier")
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1] ExpressionRightSide object",
      "Unexpected object id type"
    );
  const sanityTrySectorAngle = forStatementExpressionRightSide.object.name;
  const forStatementBody = forStatement.body.body;
  if (
    forStatementBody.length !== 2 ||
    forStatementBody[0].type !== "ExpressionStatement" ||
    forStatementBody[1].type !== "IfStatement"
  )
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1] body.body",
      "Unexpected body length"
    );
  const forStatementExpression = forStatementBody[0].expression;
  if (
    forStatementExpression.type !== "AssignmentExpression" ||
    forStatementExpression.operator !== "+="
  )
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1][0] (Expression)",
      "Unexpected expression/operator type"
    );
  const inForStatementExpressionRightSide = forStatementExpression.right;
  if (
    inForStatementExpressionRightSide.type !== "MemberExpression" ||
    inForStatementExpressionRightSide.object.type !== "Identifier" ||
    inForStatementExpressionRightSide.property.type !== "Identifier"
  )
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1][0] (Expression) RightSide",
      "Unexpected expression/id type"
    );
  if (sanityTrySectorAngle !== inForStatementExpressionRightSide.object.name)
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1][0] (Expression) RightSide object",
      "Unexpected name sanity check: mismatch"
    );
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
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1][1] (Expression) Test",
      "Unexpected test expression"
    );
  const absArgument = inForStatementIfStatement.test.left.arguments[0];
  if (absArgument.type !== "Identifier")
    throw new TranslationNodeLocateError(
      "calcCurrentSectorIndex",
      "ForStatement arrowFunction body[1][1] (Expression) Test left",
      "Unexpected test argument type"
    );
  const currentWheelAngle_Name = absArgument.name;
  console.debug(
    "[patcher]:locateInLoadWheelBy_calcCurrentSectorIndex - Located calcCurrentSectorIndex function",
    {
      calcCurrentSectorIndexName,
      sanityTrySectorAngle,
      currentWheelAngle_Name,
      calcCurrentSectorIndex_VariableDeclaration,
    }
  );
  return [
    calcCurrentSectorIndexName,
    sanityTrySectorAngle,
    currentWheelAngle_Name,
    calcCurrentSectorIndex_VariableDeclaration,
  ];
}

function findLoadWheelBody(wholeFileNode_Body) {
  const loadWheel_FunctionDeclaration = wholeFileNode_Body.find(
    (node) =>
      node.type === "FunctionDeclaration" &&
      node.async &&
      node.id.name === "loadWheel"
  );
  if (!loadWheel_FunctionDeclaration)
    throw new TranslationNodeLocateError(
      "loadWheel",
      "wholeFileNode_Body",
      "type FunctionDeclaration"
    );
  const loadWheel_BlockStatement = loadWheel_FunctionDeclaration.body;
  console.debug(
    "[patcher]:findLoadWheelBody - Located loadWheel function body",
    {
      loadWheel_FunctionDeclaration,
      loadWheel_BlockStatement,
    }
  );
  return loadWheel_BlockStatement.body;
}

/**
 * Parse source string and returns whole file node
 * @param {string} deobfuscatedSource
 * @returns File Node
 */
function findFileNode(deobfuscatedSource) {
  const fileNode = Parser.parse(deobfuscatedSource, {
    ecmaVersion: 2020,
    sourceType: "script",
  });
  console.debug("[patcher]:findFileNode - Parsed source string to AST", {
    fileNode,
  });
  return fileNode;
}

function findAfterScriptLoadFunctions(wholeFileNode_Body) {
  const afterScriptLoadFunctions = wholeFileNode_Body
    .filter(
      (node) =>
        nodeIs.expressionStatement(node) &&
        nodeIs.memberExpression(node.expression.callee) &&
        (nodeIs.identifier(node.expression.callee.object, { name: "window" }) ||
          nodeIs.identifier(node.expression.callee.object, {
            name: "document",
          })) &&
        nodeIs.identifier(node.expression.callee.property, {
          name: "addEventListener",
        }) &&
        nodeIs.literal(node.expression.arguments[0], {
          value: "DOMContentLoaded",
        }) &&
        nodeIs.arrowFunctionExpression(node.expression.arguments[1])
    )
    .sort((a, b) => {
      const aIsDocument = nodeIs.identifier(a.expression.callee.object, {
        name: "document",
      });
      const bIsDocument = nodeIs.identifier(b.expression.callee.object, {
        name: "document",
      });
      if (aIsDocument && !bIsDocument) return -1;
      if (!aIsDocument && bIsDocument) return 1;
      return 0;
    })
    .map((node) => node.expression.arguments[1]);
  console.debug(
    "[patcher]:findAfterScriptLoadFunctions - Located and sorted after script load functions",
    { afterScriptLoadFunctions }
  );
  return afterScriptLoadFunctions;
}

function parsePatchesToAst(randomizer, sectorIndex, afterScriptLoad) {
  let randomizerAst, sectorIndexAst, afterScriptLoadAst;
  try {
    randomizerAst = Parser.parse(randomizer, {
      ecmaVersion: 2022,
      sourceType: "script",
    });
    sectorIndexAst = Parser.parse(sectorIndex, {
      ecmaVersion: 2022,
      sourceType: "script",
    });
    afterScriptLoadAst = Parser.parse(afterScriptLoad, {
      ecmaVersion: 2022,
      sourceType: "script",
    });
  } catch (e) {
    throw new TranslationArgumentError(e, "Error while parsing patches");
  }
  if (randomizerAst.body.length !== 1) {
    throw new TranslationArgumentError(
      "randomizer",
      "Must have exactly one statement"
    );
  }
  if (sectorIndexAst.body.length !== 1) {
    throw new TranslationArgumentError(
      "sectorIndex",
      "Must have exactly one statement"
    );
  }
  if (afterScriptLoadAst.body.length !== 1) {
    throw new TranslationArgumentError(
      "afterScriptLoad",
      "Must have exactly one statement"
    );
  }
  const randomizerExpression = randomizerAst.body[0].expression;
  const sectorIndexExpression = sectorIndexAst.body[0].expression;
  const afterScriptLoadExpression = afterScriptLoadAst.body[0].expression;
  if (
    !(
      (randomizerExpression.type === "FunctionExpression" ||
        randomizerExpression.type === "ArrowFunctionExpression") &&
      randomizerExpression.params.length === 2
    )
  ) {
    throw new TranslationArgumentError(
      "randomizer",
      "Must be a function with exactly two arguments"
    );
  }
  if (
    !(
      (sectorIndexExpression.type === "FunctionExpression" ||
        sectorIndexExpression.type === "ArrowFunctionExpression") &&
      sectorIndexExpression.params.length === 0
    )
  ) {
    throw new TranslationArgumentError(
      "sectorIndex",
      "Must be a function with exactly zero arguments"
    );
  }
  if (
    !(
      afterScriptLoadExpression.type === "CallExpression" &&
      (afterScriptLoadExpression.callee.type === "FunctionExpression" ||
        afterScriptLoadExpression.callee.type === "ArrowFunctionExpression")
    )
  ) {
    throw new TranslationArgumentError("afterScriptLoad", "Must be an IIFE");
  }
  const expressions = {
    randomizer: randomizerExpression,
    sectorIndex: sectorIndexExpression,
    afterScriptLoad: afterScriptLoadExpression,
  };
  console.debug("[patcher]:parsePatchesToAst Patch code expression parsed", {
    expressions,
  });
  return expressions;
}

function parseRiggingValues(riggingValues) {
  const riggedIndexes = [];
  const riggedNames = [];
  riggingValues.forEach((x) => {
    const n = /^\d+$/.test(x) ? Number(x) : NaN;
    if (Number.isSafeInteger(n)) {
      riggedIndexes.push(n);
    } else {
      riggedNames.push(x);
    }
  });
  console.debug("[patcher]:parseRiggingValues rigging values parsed", {
    riggedIndexes,
    riggedNames,
  });
  return { riggedIndexes, riggedNames };
}
