const MMenu = () => {
    const element = document.createElement("div")
    element.style.width = "100%"
    // element.style.height = "calc(100% - 200px)"
    element.style.padding = "10px 10px"
    element.style.overflowY = "auto"
    element.style.fontFamily = "monospace"

    const other = document.createElement("a")
    other.style.cursor = "pointer"
    other.innerHTML = "<=返回"
    other.onclick = () => {
        GLOBAL.reload()
    }

    const mulu = document.createElement("h2")
    mulu.innerHTML = GLOBAL.book.bookname

    element.appendChild(other)
    element.appendChild(mulu)
    const titles = []
    for (const idx in GLOBAL.sections) {
        const section = GLOBAL.sections[idx]
        const title = document.createElement("a")
        const current = parseInt(idx) + 1
        title.innerText = `[${String(current).padStart(2, "0")}]${section.title}`
        title.style.display = "block"
        title.style.cursor = "pointer"
        titles.push(title)
        title.onclick = function () {
            if (GLOBAL.current !== current) {
                GLOBAL.current = current
            }
        }
        element.appendChild(title)
    }
    GLOBAL.currentWatchers.push(() => {
        for (const item of titles) {
            item.style.color = ""
        }
        titles[GLOBAL.current - 1].style.color = "var(--yellow)"
    })
    return element
}