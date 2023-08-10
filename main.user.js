// ==UserScript==
// @name         freecodecamp-enhancer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       renzhamin
// @match        https://www.freecodecamp.org/news/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org
// @require      attach_copy_btn.js
// @run-at       document-idle
// ==/UserScript==

const shortcut_toc_toggle = ";"

window.onload = function () {
    setTimeout(main, 2500)
}

function main() {
    attach_copy_btn()
    /* add_toc(shortcut_toc_toggle) */
}
