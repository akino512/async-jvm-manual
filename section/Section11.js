const Section11 = function () {
    const title = "进阶异步编程"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")
        const t = MTitle(title)
        const p1 = MParagraph()
        const v1 = MMedia("video-future_coordination", [MVideo("./asset/video/future_coordination.mp4")])
        const i1 = MMedia("image-future_coordination", [MImage("./asset/image/future_coordination.png")])
        const t1 = MText(`Vert.x支持Future组合，调用Future.any可以得到一个组合Future，该Future将在其任意子Future完成时完成。<br />
        （Future.all则与之相对，在所有子Future完成时完成）<br />
        如image-future_coordination，利用该特性可以轻松编写一个带有超时处理的余额查询功能。<br />
        在复杂业务中，合理使用Future组合可以有效提高代码的逻辑性和可读性。<br />`)

        p1.appendChild(v1)
        p1.appendChild(i1)
        p1.appendChild(t1)
        element.appendChild(t)
        element.appendChild(p1)
        return element
    }
}();