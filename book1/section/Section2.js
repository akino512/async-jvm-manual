GLOBAL.sections.push({
    title: "前言",
    read: function () {
        const element = document.createElement("div")
        const t = MTitle(this.title)

        const p1 = MParagraph()
        const t1 = MText(`
        本书旨在向读者介绍，在基于JVM的服务端应用中，如何使用异步编程应对高并发场景，<br />
        以及如何弥补Java编程语言中对异步编程缺乏支持的缺陷。<br />
        <br />
        本书适合有Java编程语言基础，并对异步编程感兴趣的读者。<br />
        `)

        const p2 = MParagraph()
        const i2 = MMedia("image-workflow", [MImage("workflow.png")])
        const t2 = MText(`
        假设有售票流程如image-workflow，需求是编写能应对高并发的售票服务应用。<br />
        本书将基于该模型，分章节逐步解析一般服务端应用开发中常见的问题以及应对方式。<br />
        `)

        p1.appendChild(t1)
        p2.appendChild(i2)
        p2.appendChild(t2)
        element.appendChild(t)
        element.appendChild(p1)
        element.appendChild(p2)
        return element
    }
})