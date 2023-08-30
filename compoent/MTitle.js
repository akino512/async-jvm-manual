const MTitle = (str) => {
    const element = document.createElement("h1")
    element.style.margin = "10px"
    element.style.fontFamily = "monospace"
    element.innerText = str
    return element
}