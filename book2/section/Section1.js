GLOBAL.sections.push({
    title: "首页",
    read: function () {
        const element = document.createElement("div")

        const span = document.createElement("span")
        span.style.fontSize = "50px;"
        span.innerText = "数据，桶与JSON"

        const full = MFull()
        full.appendChild(span)
        element.appendChild(full)
        return element
    },
})