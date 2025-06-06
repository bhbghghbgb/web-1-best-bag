import $ from "jquery";
import { translate } from "./wheel.rig.js";

// File paths for each input
const filePaths = {
  deob: "wheel.deob.js",
  patch: "wheel.patch.js",
  patch2: "wheel.patch2.js",
  patch3: "wheel.patch3.js",
  userscripter: "wheel.userscripter.js",
  demoReplace: "wheel.replace.js",
  demoComplete: "wheel.complete.js",
  demoUserscripted: "wheel.userscripted.js",
};

// Helper to load file content asynchronously
async function loadFile(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) throw new Error(`Failed to load ${filePath}`);
  return await response.text();
}

// Show loading state
function setLoading(element, isLoading) {
  const $element = $(element);
  if (isLoading) {
    $element.addClass("loading");
    $element.prop("disabled", true);
    $element.html(`${$element.text()} <span class="loader"></span>`);
  } else {
    $element.removeClass("loading");
    $element.prop("disabled", false);
    $element.text(
      $element
        .text()
        .replace(/<span class="loader"><\/span>/, "")
        .trim()
    );
  }
}

// Show error message
function showError(message) {
  const $error = $("#errorMessage");
  $error.text(message).show();
  setTimeout(() => $error.fadeOut(), 5000);
}

$(() => {
  // Set default value for inputNames
  $("#inputNames").val("Mai Hương Giang");

  // Function to load all files with individual loading states
  const loadAllFiles = async () => {
    // Set loading states for all reload buttons
    setLoading("#reloadDeob", true);
    setLoading("#reloadPatch", true);
    setLoading("#reloadPatch2", true);
    setLoading("#reloadPatch3", true);
    setLoading("#reloadUserscripter", true);

    const errors = [];

    // Use Promise.allSettled to handle all promises regardless of rejection
    const results = await Promise.allSettled([
      loadFileWithErrorHandling(filePaths.deob, "deob")
        .then((content) => {
          $("#inputDeob").val(content);
          setLoading("#reloadDeob", false);
        })
        .catch((err) => {
          errors.push(`Deob: ${err.message}`);
          setLoading("#reloadDeob", false);
        }),

      loadFileWithErrorHandling(filePaths.patch, "patch")
        .then((content) => {
          $("#inputPatch").val(content);
          setLoading("#reloadPatch", false);
        })
        .catch((err) => {
          errors.push(`Patch: ${err.message}`);
          setLoading("#reloadPatch", false);
        }),

      loadFileWithErrorHandling(filePaths.patch2, "patch2")
        .then((content) => {
          $("#inputPatch2").val(content);
          setLoading("#reloadPatch2", false);
        })
        .catch((err) => {
          errors.push(`Patch2: ${err.message}`);
          setLoading("#reloadPatch2", false);
        }),

      loadFileWithErrorHandling(filePaths.patch3, "patch3")
        .then((content) => {
          $("#inputPatch3").val(content);
          setLoading("#reloadPatch3", false);
        })
        .catch((err) => {
          errors.push(`Patch3: ${err.message}`);
          setLoading("#reloadPatch3", false);
        }),

      loadFileWithErrorHandling(filePaths.userscripter, "userscripter")
        .then((content) => {
          $("#inputUserscripter").val(content);
          setLoading("#reloadUserscripter", false);
        })
        .catch((err) => {
          errors.push(`Userscripter: ${err.message}`);
          setLoading("#reloadUserscripter", false);
        }),
    ]);

    // Show all errors at once if any occurred
    if (errors.length > 0) {
      showError(`Some files failed to load:\n${errors.join("\n")}`);
    }
  };

  // Helper function to handle file loading with error conversion
  async function loadFileWithErrorHandling(filePath, name) {
    try {
      const content = await loadFile(filePath);
      return content;
    } catch (err) {
      // Convert error to include which file failed
      throw new Error(`${name}: ${err.message}`);
    }
  }

  // Load all files on page load
  loadAllFiles();

  // Reload button handlers
  $("#reloadDeob").on("click", async () => {
    setLoading("#reloadDeob", true);
    try {
      const content = await loadFile(filePaths.deob);
      $("#inputDeob").val(content);
    } catch (err) {
      showError(`Error reloading deob file: ${err.message}`);
    } finally {
      setLoading("#reloadDeob", false);
    }
  });

  $("#reloadPatch").on("click", async () => {
    setLoading("#reloadPatch", true);
    try {
      const content = await loadFile(filePaths.patch);
      $("#inputPatch").val(content);
    } catch (err) {
      showError(`Error reloading patch file: ${err.message}`);
    } finally {
      setLoading("#reloadPatch", false);
    }
  });

  $("#reloadPatch2").on("click", async () => {
    setLoading("#reloadPatch2", true);
    try {
      const content = await loadFile(filePaths.patch2);
      $("#inputPatch2").val(content);
    } catch (err) {
      showError(`Error reloading patch2 file: ${err.message}`);
    } finally {
      setLoading("#reloadPatch2", false);
    }
  });

  $("#reloadPatch3").on("click", async () => {
    setLoading("#reloadPatch3", true);
    try {
      const content = await loadFile(filePaths.patch3);
      $("#inputPatch3").val(content);
    } catch (err) {
      showError(`Error reloading patch3 file: ${err.message}`);
    } finally {
      setLoading("#reloadPatch3", false);
    }
  });

  $("#reloadUserscripter").on("click", async () => {
    setLoading("#reloadUserscripter", true);
    try {
      const content = await loadFile(filePaths.userscripter);
      $("#inputUserscripter").val(content);
    } catch (err) {
      showError(`Error reloading userscripter file: ${err.message}`);
    } finally {
      setLoading("#reloadUserscripter", false);
    }
  });

  // Reset names button
  $("#resetNames").on("click", () => {
    $("#inputNames").val("Mai Hương Giang");
  });

  // Demo result reload handlers
  $("#reloadDemoReplace").on("click", async () => {
    setLoading("#reloadDemoReplace", true);
    try {
      const content = await loadFile(filePaths.demoReplace);
      $("#resultReplace").val(content);
    } catch (err) {
      showError(`Error loading demo replace file: ${err.message}`);
    } finally {
      setLoading("#reloadDemoReplace", false);
    }
  });

  $("#reloadDemoComplete").on("click", async () => {
    setLoading("#reloadDemoComplete", true);
    try {
      const content = await loadFile(filePaths.demoComplete);
      $("#resultComplete").val(content);
    } catch (err) {
      showError(`Error loading demo complete file: ${err.message}`);
    } finally {
      setLoading("#reloadDemoComplete", false);
    }
  });

  $("#reloadDemoUserscripted").on("click", async () => {
    setLoading("#reloadDemoUserscripted", true);
    try {
      const content = await loadFile(filePaths.demoUserscripted);
      $("#resultUserscripted").val(content);
    } catch (err) {
      showError(`Error loading demo userscripted file: ${err.message}`);
    } finally {
      setLoading("#reloadDemoUserscripted", false);
    }
  });

  // Submit button handler
  $("#submitButton").on("click", () => {
    setLoading("#submitButton", true);
    $("#errorMessage").hide();

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      try {
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

        // Scroll to results
        $("html, body").animate(
          {
            scrollTop: $("#resultReplace").parents(".result-group").offset()
              .top,
          },
          500
        );
      } catch (err) {
        console.error(err);
        showError(`Processing error: ${err.message}`);
      } finally {
        setLoading("#submitButton", false);
      }
    }, 50); // Small delay to ensure UI updates
  });
});
