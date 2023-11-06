GLOBAL.books.push({
    bookname: "《JVM异步编程入门》",
    dir: 'book1',
    date: '2023-8',
    read: function () {
        const srcArr = [
            `./${this.dir}/section/Section1.js`,
            `./${this.dir}/section/Section2.js`,
            `./${this.dir}/section/Section3.js`,
            `./${this.dir}/section/Section4.js`,
            `./${this.dir}/section/Section5.js`,
            `./${this.dir}/section/Section6.js`,
            `./${this.dir}/section/Section7.js`,
            `./${this.dir}/section/Section8.js`,
            `./${this.dir}/section/Section9.js`,
            `./${this.dir}/section/Section10.js`,
            `./${this.dir}/section/Section11.js`,
            `./${this.dir}/section/Section12.js`,
        ]
        for (const src of srcArr) {
            TOOL.addScript(src)
        }
    },
})