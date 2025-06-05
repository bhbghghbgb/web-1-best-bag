import $ from "jquery";
import { translate } from "./wheel.rig.js";

// Helper to load file content asynchronously
async function loadFile(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) throw new Error(`Failed to load ${filePath}`);
  return await response.text();
}

$(() => {
  // Set default value for inputNames
  $("#inputNames").val("Mai Hương Giang");

  // Load files and set input values
  (async () => {
    try {
      const [
        wheelDeobJs,
        wheelPatchJs,
        wheelPatch2Js,
        wheelPatch3Js,
        wheelUserscripterJs,
      ] = await Promise.all([
        loadFile("wheel.deob.js"),
        loadFile("wheel.patch.js"),
        loadFile("wheel.patch2.js"),
        loadFile("wheel.patch3.js"),
        loadFile("wheel.userscripter.js"),
      ]);
      $("#inputDeob").val(wheelDeobJs);
      $("#inputPatch").val(wheelPatchJs);
      $("#inputPatch2").val(wheelPatch2Js);
      $("#inputPatch3").val(wheelPatch3Js);
      $("#inputUserscripter").val(wheelUserscripterJs);
    } catch (err) {
      console.error(err);
    }
  })();

  $("#submitButton").on("click", () => {
    const wheelDeobJs = $("#inputDeob").val();
    const wheelPatchJs = $("#inputPatch").val();
    const wheelPatch2Js = $("#inputPatch2").val();
    const wheelPatch3Js = $("#inputPatch3").val();
    const wheelUserscripterJs = $("#inputUserscripter").val();
    const riggedValues = $("#inputNames")
      .val()
      .trim()
      .split(/\s+/g)
      .filter((v) => v);
    const {
      sourceComplete,
      sourceCompleteObfuscated,
      sourceUserScriptComplete,
    } = translate(
      wheelDeobJs,
      wheelPatchJs,
      wheelPatch2Js,
      wheelPatch3Js,
      wheelUserscripterJs,
      riggedValues
    );
    $("#resultReplace").val(sourceComplete);
    $("#resultComplete").val(sourceCompleteObfuscated);
    $("#resultUserscripted").val(sourceUserScriptComplete);
    // scroll to bottom of page where the result textbox are, can probably be enhanced
    $(document).scrollTop($(document).height());
  });
});
