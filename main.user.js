// ==UserScript==
// @name            freecodecamp-enhancer
// @version         0.1
// @description     enhance freecodecamp article reading experience
// @author          renzhamin
// @match           https://www.freecodecamp.org/news/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_copy_button copy_button/styles_copy_button.css
// @require         copy_button/attach_copy_button.js
// @resource        styles_toc toc/styles_toc.css
// @require         toc/add_toc.js
// @run-at          document-end
// ==/UserScript==

/* globals attach_copy_btn, add_toc */

const shortcut_toc_toggle = ";"

window.onload = setTimeout(main, 4000)

function main() {
    attach_copy_btn()
    add_toc()
}
