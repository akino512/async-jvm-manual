GLOBAL.sections.push({
    title: "问题5：回调地狱（上）",
    read: function () {
        const element = document.createElement("div")
        const t = MTitle(this.title)

        const p1 = MParagraph()
        const i1_1 = MMedia("image-app-5-1", [MImage("./asset/image/app-5-1.png")])
        const t1_1 = MText(`随着大量回调函数的引入而产生的"回调地狱"，则是又一个恼人的问题。<br />
        让我们回顾之前的代码，如image-app-5-1。<br />
        当用异步代码代替同步代码时，出现了一些重复代码。为什么呢？<br /><br />`)
        const i1_2 = MMedia("image-code_sync", [MImage("./asset/image/code_sync.png")])
        const t1_2 = MText(`绝大多情况下，业务逻辑往往要按照预定的顺序执行。<br />
        这在传统同步代码中只需顺序编写业务逻辑代码即可，如image-code_sync。<br /><br />`)
        const i1_3 = MMedia("image-code_async", [MImage("./asset/image/code_async.png")])
        const t1_3 = MText(`这种顺序关系在异步代码中则体现为回调函数的调用。<br />
        回调函数的缺点之一是，难以优雅地处理分支逻辑，如image-code_async A。<br />
        所以一旦出现if分支，只能编写重复代码，如image-code_async B。<br />
        而重复的代码总是令人不安。<br />`)

        const p2 = MParagraph()
        const i2 = MMedia("image-app-5-2", [MImage("./asset/image/app-5-2.png")])
        const t2 = MText(`另一个方面，随着业务的增长，回调嵌套层数也将增加。<br />
        假设扣款服务逻辑更加复杂，如image-app-5-2。<br />
        多层的回调嵌套将导致代码逻辑耦合杂乱，难以阅读。<br />`)

        const p3 = MParagraph()
        const i3 = MMedia("image-cshap_await", [MImage("./asset/image/cshap_await.png")])
        const t3 = MText(`现代编程语言通常倾向使用“异步代码同步化”来解决回调地狱，比如C#中的async/await。<br />
        而目前为止，原生Java并未支持相关特性。<br />`)

        p1.appendChild(i1_1)
        p1.appendChild(t1_1)
        p1.appendChild(i1_2)
        p1.appendChild(t1_2)
        p1.appendChild(i1_3)
        p1.appendChild(t1_3)
        p2.appendChild(i2)
        p2.appendChild(t2)
        p3.appendChild(i3)
        p3.appendChild(t3)
        element.appendChild(t)
        element.appendChild(p1)
        element.appendChild(p2)
        element.appendChild(p3)
        return element
    }
})