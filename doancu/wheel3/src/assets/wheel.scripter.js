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
// @require      https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.5.0/lz-string.min.js
// ==/UserScript==

// Using lz-string to reduce the size of the script, lz-string is only 4K, but compressing
// the source string reduce from 107K to 69K. Use compressToUTF16 because compress creates
// invalid string chars which will be escaped by jsesc and create a larger string in the end

;(function () {
  'use strict'
  const target = document.body.querySelector('script[src*="wheel.min.js"]')
  if (target) {
    const inject = document.createElement('script')
    inject.type = 'text/javascript'
    inject.appendChild(document.createTextNode(LZString.decompressFromUTF16(COMPRESSED_SOURCE)))
    document.body.insertBefore(inject, target.nextSibling)
  }
})()
