const MImage = (src) => {
    const element = document.createElement("img")
    element.src = `./${GLOBAL.book.dir}/media/image/${src}`
    return element
}