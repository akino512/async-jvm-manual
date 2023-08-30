const MVideo = (src) => {
    const element = document.createElement("video")
    element.src = src
    element.controls = true
    return element
}