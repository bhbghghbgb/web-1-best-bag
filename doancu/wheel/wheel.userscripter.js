// Note: you need to change @match to your website url, and add this filter to ublock
// ||<your website url>/*/wheel.min.js*

// ==UserScript==
// @name         New Userscript
// @namespace    Violentmonkey Scripts
// @version      2025-01-16
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// @run-in       normal-tabs
// @sandbox      DOM
// ==/UserScript==

(function () {
  "use strict";
  const inject = document.createElement("script");
  inject.type = "text/javascript";
  inject.appendChild(document.createTextNode("_strreplace_completesource"));
  const target = document.body.querySelector('script[src*="wheel.min.js"]');
  if (target) document.body.insertBefore(inject, target.nextSibling);
})();
