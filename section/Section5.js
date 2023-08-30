const Section5 = function () {
    const title = "问题3：线程阻塞1（上）"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")
        const t = MTitle(title)

        const p1 = MParagraph()
        const v1 = MMedia("video-app-3-1", [MVideo("./asset/video/app-3-1.mp4")])
        const i1 = MMedia("image-app-3-1", [MImage("./asset/image/app-3-1.png")])
        const t1 = MText(`
        由于扣款服务是外部服务，假设因网络波动导致响应延迟。调整扣款服务响应时间：立即->延迟2秒。<br />
        先将Tomcat线程池大小设为100，如image-3-1。执行程序，如video-3-1。<br />
        因为限制了Tomcat最大线程数，所以当收到高于最大线程数的请求时，<br />
        只有一部分请求能得到立即处理，而这些请求占用的线程需要等待扣款服务响应后，才能被再次使用。<br />
        这便是IO引起的线程阻塞。如果线程池无法提供足够的可用线程，整个处理过程将十分耗时。<br />
        `)

        const p2 = MParagraph()
        const v2 = MMedia("video-app-3-2", [MVideo("./asset/video/app-3-2.mp4")])
        const i2 = MMedia("image-app-3-2", [MImage("./asset/image/app-3-2.png")])
        const t2 = MText(`
        将线程池大小提高至1000，使之能够匹配请求数，如image-3-2。<br />
        执行程序，如video-3-2。所有请求都立即得到了处理，但只能应对小规模的并发。<br />
        `)

        const p3 = MParagraph()
        const v3 = MMedia("video-app-3-2(5000req)", [MVideo("./asset/video/app-3-2(5000req).mp4")])
        const i3 = MMedia("image-app-3-2(5000req)", [MImage("./asset/image/app-3-2(5000req).png")])
        const t3 = MText(`
        如果我们将请求数和线程池大小都提高至5000，<br />
        可以看到，随着巨量的线程被创建，程序开始变得卡顿。<br />
        `)

        const p4 = MParagraph()
        const v4 = MMedia("video-app-3-2(10000req)", [MVideo("./asset/video/app-3-2(10000req).mp4")])
        const i4 = MMedia("image-app-3-2(10000req)", [MImage("./asset/image/app-3-2(10000req).png")])
        const t4 = MText(`
        继续提高请求数和线程池大小至10000，<br />
        内存容量几乎被瞬间占满，一部分请求得到处理后，程序卡死。<br />
        `)

        p1.appendChild(v1)
        p1.appendChild(i1)
        p1.appendChild(t1)
        p2.appendChild(v2)
        p2.appendChild(i2)
        p2.appendChild(t2)
        p3.appendChild(v3)
        p3.appendChild(i3)
        p3.appendChild(t3)
        p4.appendChild(v4)
        p4.appendChild(i4)
        p4.appendChild(t4)
        element.appendChild(t)
        element.appendChild(p1)
        element.appendChild(p2)
        element.appendChild(p3)
        element.appendChild(p4)
        return element
    }
}();