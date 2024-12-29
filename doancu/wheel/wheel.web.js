import { translate } from "./wheel.rig.js";
import $ from "jquery";
$(() => {
  $("#submitButton").on("click", () => {
    const wheelMinJs = $("#inputText1").val();
    const wheelPatchJs = $("#inputText2").val();
    const riggedValues = $("#inputText3")
      .val()
      .trim()
      .split(/\s+/g)
      .filter((v) => v);
    const { sourceComplete, sourceCompleteObfuscated } = riggedValues.length
      ? translate(wheelMinJs, wheelPatchJs, riggedValues)
      : translate(wheelMinJs, wheelPatchJs, ["Mai", "Hương", "Giang"]);
    $("#resultText1").val(sourceComplete);
    $("#resultText2").val(sourceCompleteObfuscated);
  });
});
