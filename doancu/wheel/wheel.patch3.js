(() => {
  if (document.readyState === "loading") {
    // Loading hasn't finished yet, any DOMContentLoaded listeners will be run normally
    return;
  }
  // `DOMContentLoaded` has already fired, we need to run the listeners manually
  const _astreplace_functions_afterScriptLoadFunctions = undefined;
  const functionsToCall = _astreplace_functions_afterScriptLoadFunctions ?? [];
  for (func of functionsToCall) functionsToCall(new Event("DOMContentLoaded"));
})();
