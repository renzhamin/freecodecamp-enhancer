// ==UserScript==
// @name            freecodecamp-enhancer
// @version         0.1
// @description     enhance freecodecamp article reading experience
// @author          renzhamin
// @match           https://www.freecodecamp.org/news/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_copy_button copy_button/styles.css
// @require         copy_button/index.js
// @resource        styles_toc toc/styles.css
// @require         toc/index.js
// @resource        styles_declutter declutter/styles.css
// @require         declutter/index.js
// @run-at          document-end
// ==/UserScript==

/* globals attach_copy_btn, add_toc, add_declutter_toggle */

const shortcut_toc_toggle = ";"
const shortcut_declutter_toggle = "D"

window.onload = setTimeout(main, 4000)

function main() {
    attach_copy_btn()
    add_toc(shortcut_toc_toggle)
    add_declutter_toggle(shortcut_declutter_toggle)
}
