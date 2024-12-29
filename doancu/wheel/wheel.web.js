import $ from "jquery";
import { translate } from "./wheel.rig.js";

$(() => {
  $("#submitButton").on("click", () => {
    const wheelMinJs = $("#inputText1").val();
    const wheelPatchJs = $("#inputText2").val();
    const wheelPatch2Js = $("#inputText3").val();
    const riggedValues = $("#inputText4")
      .val()
      .trim()
      .split(/\s+/g)
      .filter((v) => v);
    const { sourceComplete, sourceCompleteObfuscated } = riggedValues.length
      ? translate(wheelMinJs, wheelPatchJs, wheelPatch2Js, riggedValues)
      : translate(wheelMinJs, wheelPatchJs, wheelPatch2Js, [
          "Mai",
          "Hương",
          "Giang",
        ]);
    $("#resultText1").val(sourceComplete);
    $("#resultText2").val(sourceCompleteObfuscated);
    $(document).scrollTop($(document).height());
  });
});
