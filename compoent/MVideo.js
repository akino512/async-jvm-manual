const MVideo = (src) => {
    const element = document.createElement("video")
    element.src = `./${GLOBAL.book.dir}/media/video/${src}`
    element.controls = true
    return element
}