// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-01-16
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// @webRequest   [{"selector":"*wheel.min.js*","action":"cancel"}
// ==/UserScript==

(function () {
  "use strict";

  const src = "_strreplace_completesource";
  const inject = document.createElement("script");
  inject.type = "text/javascript";
  const code = document.createTextNode(src);
  inject.appendChild(code);
  const target = document.body.querySelector('script[src*="wheel.min.js"]');
  document.body.insertBefore(inject, target.nextSibling);
})();
