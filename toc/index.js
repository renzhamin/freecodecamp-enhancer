// ==UserScript==
// @grant           GM_getResourceText
// @grant           GM_addStyle
// @resource        styles_toc toc/styles.css
// @require         toc/index.js
// ==/UserScript==

function add_toc(toc_toggle_key) {
    GM_addStyle(GM_getResourceText("styles_toc"))

    add_toc_toggle()
    document.querySelector(".toc-content").innerHTML += generate_toc()

    if (toc_toggle_key) {
        document.addEventListener("keydown", (event) => {
            if (event.key === toc_toggle_key) {
                show_toc()
            }
        })
    }
}

function show_toc() {
    document.documentElement.style.overflow = "hidden"
    document.getElementById("toc-dialog").showModal()
}

function add_toc_toggle() {
    const dialog = document.createElement("dialog")
    dialog.setAttribute("id", "toc-dialog")
    const toc_div = document.createElement("div")
    toc_div.classList.add("toc-content")
    toc_div.innerHTML = "<h2>Table of Contents</h2>"
    dialog.appendChild(toc_div)

    const show_toc_btn = document.createElement("button")
    show_toc_btn.setAttribute("id", "toc-toggle")
    show_toc_btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z"></path></svg>'

    show_toc_btn.addEventListener("click", () => {
        show_toc()
    })

    dialog.addEventListener("click", (event) => {
        document.documentElement.style.overflow = "auto"
        event.currentTarget.close()
    })

    document.querySelector(".post-content").appendChild(dialog)
    document.querySelector(".post-content").appendChild(show_toc_btn)
}

function generate_toc() {
    // https://stackoverflow.com/questions/187619/is-there-a-javascript-solution-to-generating-a-table-of-contents-for-a-page

    let toc = ""
    let level = 1

    let container = document.querySelector(".post-content")
    const regex = /<h([2-5])\s+id="([^"]+)">([^<]+)<\/h([2-5])>/gi
    const matches = [...container.innerHTML.matchAll(regex)]
    matches.forEach((match) => {
        if (match.length != 5) return
        const [_, openLevel, id, titleText, closeLevel] = match

        if (openLevel !== closeLevel) {
            return
        }

        if (openLevel > level) {
            toc += new Array(openLevel - level + 1).join("<ol>")
        } else if (openLevel < level) {
            toc += new Array(level - openLevel + 1).join("</li></ol>")
        } else {
            toc += new Array(level + 1).join("</li>")
        }

        level = parseInt(openLevel)

        if (!id) {
            id = titleText.replace(/ /g, "_")
        }
        toc += '<li><a href="#' + id + '">' + titleText + "</a></li>"
    })

    if (level) {
        toc += new Array(level + 1).join("</ol>")
    }

    return toc
}
