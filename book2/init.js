GLOBAL.books.push({
    bookname: "《数据，桶与JSON》(ongoing)",
    dir: 'book2',
    date: '-',
    read: function () {
        const srcArr = [
            `./${this.dir}/section/Section1.js`,
        ]
        for (const src of srcArr) {
            TOOL.addScript(src)
        }
    },
})