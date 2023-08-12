// ==UserScript==
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_declutter declutter/styles.css
// @require         declutter/index.js
// ==/UserScript==

function add_declutter_toggle(key) {
    GM_addStyle(GM_getResourceText("styles_declutter"))

    document.addEventListener("keydown", (event) => {
        if (event.key === key) {
            document.body.classList.toggle("declutter")
        }
    })
}
