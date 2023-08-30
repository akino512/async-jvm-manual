const MPrevNext = (current, last) => {
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
    if (current == 1) {
        prev.innerText = "没有了"
        prev.style.backgroundColor = "grey"
        prev.style.color = "gainsboro"
        prev.style.cursor = "not-allowed"
    } else {
        prev.innerText = "上一页"
        prev.style.background = "var(--green1)"
        prev.style.cursor = "w-resize"
    }

    const next = document.createElement("div");
    next.style.display = "flex"
    next.style.width = "49%"
    next.style.height = "120px"
    next.style.justifyContent = "center"
    next.style.alignItems = "center"
    next.style.height = "center"
    next.style.userSelect = "none"
    if (current == last) {
        next.innerText = "没有了"
        next.style.backgroundColor = "grey"
        next.style.color = "gainsboro"
        next.style.cursor = "not-allowed"
    } else {
        next.innerText = "下一页"
        next.style.background = "var(--green1)"
        next.style.cursor = "e-resize"
    }

    const line = document.createElement("div");
    line.style.width = "2%"

    prev.onclick = function () {
        if (current !== 1) { location.replace(`?section=${current - 1}`) }
    }

    next.onclick = function () {
        if (current !== last) { location.replace(`?section=${current + 1}`) }
    }

    document.onkeydown = (event) => {
        if (event.key === "ArrowLeft") {
            prev.click()
        } else if (event.key === "ArrowRight") {
            next.click()
        }
    }

    element.appendChild(prev)
    element.appendChild(line)
    element.appendChild(next)

    return element
}