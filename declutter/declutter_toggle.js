// ==UserScript==
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_declutter declutter/styles_declutter.css
// @require         declutter/declutter.js
// ==/UserScript==

function declutter_toggle(key) {
    GM_addStyle(GM_getResourceText("styles_declutter"))

    document.addEventListener("keydown", (event) => {
        if (event.key === key) {
            document.body.classList.toggle("declutter")
        }
    })
}
