const MPrevNext = () => {
    const last = GLOBAL.sections.length
    const element = document.createElement("div");
    element.style.width = "100%"
    element.style.display = "flex"
    element.style.position = "absolute"
    element.style.bottom = "0"

    const prev = document.createElement("div");
    prev.style.display = "flex"
    prev.style.width = "49%"
    prev.style.height = "120px"
    prev.style.justifyContent = "center"
    prev.style.alignItems = "center"
    prev.style.height = "center"
    prev.style.userSelect = "none"
    prev.innerText = "上一页"
    prev.style.background = "var(--green1)"
    prev.style.cursor = "w-resize"

    const next = document.createElement("div");
    next.style.display = "flex"
    next.style.width = "49%"
    next.style.height = "120px"
    next.style.justifyContent = "center"
    next.style.alignItems = "center"
    next.style.height = "center"
    next.style.userSelect = "none"
    next.innerText = "下一页"
    next.style.background = "var(--green1)"
    next.style.cursor = "e-resize"

    const line = document.createElement("div");
    line.style.width = "2%"

    prev.onclick = function () {
        if (GLOBAL.current !== 1) {
            GLOBAL.current -= 1
        }
    }
    next.onclick = function () {
        if (GLOBAL.current !== last) {
            GLOBAL.current += 1
        }
    }
    document.onkeydown = (event) => {
        if (event.key === "ArrowLeft") {
            prev.click()
        } else if (event.key === "ArrowRight") {
            next.click()
        }
    }
    GLOBAL.currentWatchers.push(() => {
        if (GLOBAL.current === 1) {
            prev.classList.add("not-allowed")
            next.classList.remove("not-allowed")
        } else if (GLOBAL.current === last) {
            prev.classList.remove("not-allowed")
            next.classList.add("not-allowed")
        } else {
            prev.classList.remove("not-allowed")
            next.classList.remove("not-allowed")
        }
    })
    element.appendChild(prev)
    element.appendChild(line)
    element.appendChild(next)

    return element
}