const btn = document.querySelectorAll("button")
const h1 = document.querySelector("h1")
let result = ""
h1.innerText = ""
window.addEventListener("keypress", (el) => {
    if (el.key != "Enter") {
        result += el.key
        h1.innerText = result

    }
})
window.addEventListener("keydown", (e) => {
    btn.forEach((i) => {
        if (i.getAttribute("data-keyName") == e.code) {
            i.classList.add("btnHover")
        }
    })
    if (e.code == "Backspace") {
        result = result.slice(0, -1)
        h1.innerText = result

    }


})
window.addEventListener("keyup", (e) => {
    btn.forEach((i) => {
        if (i.getAttribute("data-keyName") == e.code) {
            i.classList.remove("btnHover")
        }
    })
})