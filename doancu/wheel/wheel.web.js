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
    const { sourceReplace, sourceComplete } = riggedValues.length
      ? translate(wheelMinJs, wheelPatchJs, riggedValues)
      : translate(wheelMinJs, wheelPatchJs);
    $("#resultText1").val(sourceReplace);
    $("#resultText2").val(sourceComplete);
  });
});
