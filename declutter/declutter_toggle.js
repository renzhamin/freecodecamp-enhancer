// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_declutter declutter/styles_declutter.css
// @require         declutter/declutter.js

function declutter_toggle(key) {
    document.addEventListener("keydown", (event) => {
        if (event.key === key) {
            document.body.classList.toggle("declutter")
        }
    })
}
