const MContent = () => {
    const element = document.createElement("div")
    element.style.width = "calc(100% - 280px)"
    element.style.display = "flex"
    element.style.flexDirection = "column"
    GLOBAL.currentWatchers.push(() => {
        element.innerText = ""
        const sec = GLOBAL.sections[GLOBAL.current - 1]
        content.appendChild(sec.read())
        const refs = sec.refs
        for (const ref in refs || []) {
            document.getElementById(ref).replaceWith(MReference(refs[ref]))
        }
    })
    return element
}