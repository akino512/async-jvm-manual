const Section7 = function () {
    const title = "问题3：线程阻塞1（下）"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")
        const t = MTitle(title)

        const p1 = MParagraph()
        const i1 = MMedia("image-app-3-3",
            [MImage("./asset/image/app-3-3(1).png"), MImage("./asset/image/app-3-3(2).png")])
        const t1 = MText(`现在我们用Vert.x重写代码，如image-app-3-3。<br />
        首先重写requestPayment函数，改用Vert.x提供的异步client发送请求，并让其返回Future，如line39。<br />
        然后在执行requestPayment时，调用回调函数onSuccess并传入原本的代码，如line53。<br />
        注意在Vert.x中，调用end函数响应请求，而不是return的方式。<br />`)

        const p2 = MParagraph()
        const v2 = MMedia("video-app-3-3", [MVideo("./asset/video/app-3-3.mp4")])
        const t2 = MText(`执行程序，如video-app-3-3。<br />
        得益于netty异步服务框架，我们不必为每个请求分配一个线程。<br />
        可以看到active_thread始终保持着一个较低的数字。<br />
        如此既避免IO引起的线程阻塞，又不会创建大量线程导致内存占满。<br />`)

        const p3 = MParagraph()
        const v3 = MMedia("video-app-3-4", [MVideo("./asset/video/app-3-4.mp4")])
        const i3 = MMedia("image-app-3-4", [MImage("./asset/image/app-3-4.png")])
        const t3 = MText(`通过video-app-3-3，可以看到每个请求的线程id是相同的，这是因为Vert.x保证了这些请求由同一个event loop处理。<br />
        因此我们可以大胆地将ticketCount改回普通的long类型，这将略微减少性能损耗，如image-app-3-4。<br />
        执行程序（为方便演示，改回1000请求），依然得到了正确的结果，如video-app-3-4。<br />
        事实上，Vert.x几乎保证了所有handler不会被同时执行，这天然地杜绝了绝大多数多线程下的安全问题。<br />
        （除非开发者主动调用那些明显会使用到其他线程的函数，比如下一章讲到的worker pool）<br />`)

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
        return element
    }
}();