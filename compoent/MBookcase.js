const MBookcase = (books) => {
    const element = document.createElement("div")
    element.style.background = 'var(--gray2)'
    element.style.width = '100%'
    element.style.minHeight = '100vh'
    element.style.display = 'flex'

    const box = document.createElement("div")
    box.style.width = '800px'
    box.style.height = '400px'
    box.style.margin = 'auto'
    box.style.padding = '20px'
    box.style.background = '#f2f3f4'
    box.style.borderColor = "#e5e5e5 #dbdbdb #d2d2d2"
    box.style.boxShadow = "3px 3px 3px 3px rgb(0,0,0,.3)"

    // box.style.display = "grid"
    // box.style.gridTemplateColumns = "auto auto"
    // box.style.justifyContent = "start"

    for (const book of books) {
        const b = document.createElement("div")
        b.style.display = "flex"

        const name = document.createElement("a")
        name.innerText = `${book.bookname}`
        name.style.cursor = "pointer"
        name.style.display = "block"
        name.style.flexBasis = "50%"
        name.onclick = function () {
            GLOBAL.reload(book.dir)
        }

        const date = document.createElement("span")
        date.innerText = book.date
        date.style.flexBasis = "50%"

        b.appendChild(name)
        b.appendChild(date)
        box.appendChild(b)
    }

    element.appendChild(box)
    return element
}