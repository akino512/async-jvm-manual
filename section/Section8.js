const Section8 = function () {
    const title = "问题4：线程阻塞2"
    titles.push(title)
    last++
    return () => {
        const element = document.createElement("div")
        const t = MTitle(title)

        const p1 = MParagraph()
        const i1 = MMedia("image-app-4-1", [MImage("./asset/image/app-4-1.png")])
        const t1 = MText(`异步编程的世界很迷人，但是问题也接踵而至。首先event loop是绝不能被阻塞的。<br />
        与之前的IO引起的线程阻塞不同，这里要说的是另一种线程阻塞，即是来自程序内部的阻塞，比如死循环、大计算量等。<br />
        给其中一个请求(count为500的请求)添加一个耗时blockingMethod函数，如image-app-4-1，line69。<br />`)

        const p2 = MParagraph()
        const v2 = MMedia("video-app-4-1", [MVideo("./asset/video/app-4-1.mp4")])
        const t2 = MText(`执行程序，如video-app-4-1。<br />
        可以看到，当blockingMethod被调用时，占用了event loop长达数秒（并且Vert.x也给出了警告）。<br />
        这导致之后所有的请求无法得到立即处理，整个过程被严重拖慢。<br />`)

        const p3 = MParagraph()
        const v3 = MMedia("video-app-4-2", [MVideo("./asset/video/app-4-2.mp4")])
        const i3 = MMedia("image-app-4-2",
            [MImage("./asset/image/app-4-2(1).png"), MImage("./asset/image/app-4-2(2).png")])
        const t3 = MText(`Vert.x提供一个独立的线程池worker pool<i id="href_workerpool"></i>，用以处理可能发生阻塞风险的代码段。重新编写代码，如image-app-4-2。<br />
        通过executeBlocking函数来使用worker pool，如line72。另外让blockingMethod打印当前线程ID，如line56。<br />
        执行程序，如video-4-2。可以看到，除了调用blockingMethod的请求外，所有请求均得到了立即处理，避免了线程阻塞。<br />
        值得注意的是，来自worker pool的线程（id:20）固然不同于event loop线程(id:17)，<br />
        但是调用回调函数onSuccess的线程，是和event loop线程保持一致的(id:17)，此特性在Vert.x中得到了保证
        <i id="href_vertxeventloop"></i>。<br />`)

        element.appendChild(t)
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
            href_vertxeventloop: "https://vertx.io/docs/vertx-core/java/#_reactor_and_multi_reactor",
            href_workerpool: "https://vertx.io/docs/vertx-core/java/#_verticle_worker_pool"
        }
        return element
    }
}();