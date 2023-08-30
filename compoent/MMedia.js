const MMedia = (name, mediaArr) => {
    const element = document.createElement("div")
    element.style.marginBottom = "10px"
    const mediaDiv = document.createElement("div")
    const mark = document.createElement("div")
    mark.style.color = "gray"
    mark.style.margin = "0 auto"
    mark.style.width = "fit-content"
    mark.innerText = name
    for (const media of mediaArr) {
        mediaDiv.appendChild(media)
    }
    element.appendChild(mediaDiv)
    element.appendChild(mark)
    return element
}