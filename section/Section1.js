const Section1 = function () {
    const title = "首页"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")

        const span = document.createElement("span")
        span.style.fontSize = "50px;"
        span.innerText = "JVM异步编程入门"

        const full = MFull()
        full.appendChild(span)
        element.appendChild(full)
        return element
    }
}();