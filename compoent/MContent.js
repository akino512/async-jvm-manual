const MContent = () => {
    const element = document.createElement("div")
    element.style.display = "flex"
    element.style.flexDirection = "column"
    element.style.background = "var(--gray2)"
    GLOBAL.currentWatchers.push(() => {
        element.innerText = ""
        const sec = GLOBAL.sections[GLOBAL.current - 1]
        element.appendChild(sec.read())
        const refs = sec.refs
        for (const ref in refs || []) {
            document.getElementById(ref).replaceWith(MReference(refs[ref]))
        }
    })
    return element
}