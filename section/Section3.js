const Section3 = function () {
    const title = "问题1：线程安全1"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")
        const t = MTitle(title)

        const p1 = MParagraph()
        const i1 = MMedia("image-app-1-1", [MImage("./asset/image/app-1-1.png")])
        const t1 = MText(`
        根据需求编写Java Spring Boot代码，如image-app-1-1。<br />
        用OkHttp<i id="ref_okhttp"></i>编写一个请求扣款服务的函数requestPayment，如line17。<br />
        对每个请求，输出唯一的request id，和剩余票数，如line26。<br />
        `)

        const p2 = MParagraph()
        const v2 = MMedia("video-app-1-1", [MVideo("./asset/video/app-1-1.mp4")])
        const t2 = MText(`
        有1000张票要出售，那么先假设也正好收到1000个购票请求。则ticketCount的预期最终结果是0。<br />
        执行程序，如video-app-1-1。（上部终端为售票服务，下部终端为客户端，后面章节同此）<br />
        ticketCount并未如预期输出0，这是一种很常见的线程安全问题，data race。<br />
        造成该问题原因是多线程下，一般类型的共享变量不能保证其自身的原子性。<br />
        `)

        const p3 = MParagraph()
        const v3 = MMedia("video-app-1-2", [MVideo("./asset/video/app-1-2.mp4")])
        const i3 = MMedia("image-app-1-2", [MImage("./asset/image/app-1-2.png")])
        const t3 = MText(`
        在Java中，我们可以使用原子型变量来避免该问题，如image-app-1-2。<br />
        执行程序，输出正确结果，如video-app-1-2。<br />
        `)

        p1.appendChild(i1)
        p1.appendChild(t1)
        p2.appendChild(v2)
        p2.appendChild(t2)
        p3.appendChild(v3)
        p3.appendChild(i3)
        p3.appendChild(t3)
        element.appendChild(t)
        element.appendChild(p1)
        element.appendChild(p2)
        element.appendChild(p3)
        element.refs = {
            ref_okhttp: "https://mvnrepository.com/artifact/com.squareup.okhttp3/okhttp"
        }
        return element
    }
}();