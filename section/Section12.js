const Section12 = function () {
    const title = "尾页"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")

        const span = document.createElement("span")
        span.style.fontSize = "50px;"
        span.innerText = "感　谢　阅　读"

        const full = MFull()
        full.appendChild(span)
        element.appendChild(full)
        return element
    }
}();