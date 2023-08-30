const MReference = (href) => {
    const element = document.createElement("sup")
    const a = document.createElement("a")
    a.target="_blank"
    a.href = href
    a.innerText = "[?]"
    element.appendChild(a)
    return element
}