// ==UserScript==
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_copy_button copy_button/styles.css
// @require         copy_button/index.js
// ==/UserScript==

function wrap(elem, wrapper) {
    elem.parentNode.insertBefore(wrapper, elem)
    wrapper.appendChild(elem)
}

function attach_copy_btn() {
    GM_addStyle(GM_getResourceText("styles_copy_button"))

    const codes = document.querySelectorAll("pre > code")
    codes.forEach((code) => {
        const pre = code.parentElement
        const btn = document.createElement("button")
        btn.textContent = "copy"
        btn.classList.add("copy-btn")
        btn.addEventListener("click", () =>
            navigator.clipboard.writeText(code.textContent).then(() => {
                btn.textContent = "copied"
                setTimeout(() => (btn.textContent = "copy"), 2500)
            })
        )
        const div = document.createElement("div")
        div.classList.add("pre-wrapper")
        div.appendChild(btn)
        wrap(pre, div)
    })
}
