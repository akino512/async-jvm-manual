const MMenu = (current) => {
    const element = document.createElement("div")
    element.style.width = "100%"
    element.style.height = "calc(100% - 200px)"
    element.style.padding = "10px 20px 10px 20px"
    element.style.overflowY = "auto"
    element.style.fontFamily = "monospace"

    const mulu = document.createElement("h2")
    mulu.innerHTML = "目录"

    element.appendChild(mulu)
    for (const idx in titles) {
        const title = document.createElement("a")
        const number = parseInt(idx) + 1
        title.innerText = `[${String(number).padStart(2, "0")}]${titles[idx]}`
        title.style.display = "block"
        if(idx == current - 1){
            title.style.color = "var(--yellow)"
        } else {
            title.href = `?section=${number}`
        }
        element.appendChild(title)
    }
    return element
}