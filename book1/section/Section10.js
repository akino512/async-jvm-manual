GLOBAL.sections.push({
    title: "问题5：回调地狱（下）",
    read: function () {
        const element = document.createElement("div")
        const t = MTitle(this.title)

        const p1 = MParagraph()
        const t1 = MText(`Kotlin是能够兼容Java代码的JVM languages。与其他许多现代编程语言一样，Kotlin提供原生的协程（coroutine）<i id="href_coroutine"></i>支持。<br />
        协程可被视作一种轻量的线程（而又区别于线程），与传统线程相比，创建协程消耗资源极少。<br />
        要解决回调地狱，关键在于利用Kotlin协程，以及Kotlin协程的特性之一，suspendable。<br />`)

        const p2 = MParagraph()
        const i2 = MMedia("image-app-5-3",
            [MImage("app-5-3(1).png"),
            MImage("app-5-3(2).png"),
            MImage("app-5-3(3).png"),
            ])
        const t2 = MText(`引入Vert.x提供的lib kotlin-coroutines，并用Kotlin重新编写代码，如image-app-5-3。<br />
        首先编写扩展函数
        <i id="href_extensionfunction"></i>suspendHandler，让其接收suspend函数为参数，如line85。<br />
        在Kotlin中，可以通过在调用函数的末尾添加lambda的方式传递高阶函数
        <i id="href_lambda"></i>，如line86。<br />
        然后调用CoroutineScope.launch函数开启协程。<br />
        这里一定要使用RoutingContext提供的dispatcher
        <i id="href_dispatchers"></i>，以保证协程使用与event loop一致的线程，如line87。<br />
        用suspend
        <i id="href_suspend"></i>修饰handler函数，这样可以在函数中调用协程API，如line66。<br />
        最后修改业务代码，删除requestPayment后的回调函数onSuccess，并用await函数替代，如line72。<br />
        将原本需要传入回调函数的代码，接着await编写。如此便得到了同步化后的异步代码，避免了回调地狱。<br />`)

        const p3 = MParagraph()
        const i3 = MMedia("image-future_await", [MImage("future_await.png")])
        const t3 = MText(`点击查看await函数，发现其实是一个Future的扩展函数。<br />
        前两行代码很容易理解，成功则返回结果，失败则抛异常。<br />
        如果Future未完成，则调用协程API suspendCancellableCoroutine，调用这个函数会挂起当前协程。<br />
        挂起协程拿到Continuation，执行onComplete，让Future完成后调用Continuation.resume恢复协程。<br />
        也就是说执行await函数可以挂起当前协程直到Future完成。利用这个特性，避免了回调函数的使用。<br />
        重要的是挂起协程，只会让渡执行权给当前调度器下的其他协程，<br />
        而不会阻塞调度器线程（或线程池），因此保证了程序的非阻塞性。<br />`)

        const p4 = MParagraph()
        const v4 = MMedia("video-app-5-3", [MVideo("app-5-3.mp4")])
        const t4 = MText(`执行程序，如video-app-5-3，结果与video-app-4-2一致。<br />
        至此，我们已经得到了一套较为完善的异步代码。<br />`)

        p1.appendChild(t1)
        p2.appendChild(i2)
        p2.appendChild(t2)
        p3.appendChild(i3)
        p3.appendChild(t3)
        p4.appendChild(v4)
        p4.appendChild(t4)
        element.appendChild(t)
        element.appendChild(p1)
        element.appendChild(p2)
        element.appendChild(p3)
        element.appendChild(p4)
        return element
    },
    refs: {
        href_coroutine: "https://kotlinlang.org/docs/coroutines-guide.html",
        href_extensionfunction: "https://kotlinlang.org/docs/extensions.html#extension-functions",
        href_dispatchers: "https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#dispatchers-and-threads",
        href_suspend: "https://kotlinlang.org/docs/coroutines-basics.html#extract-function-refactoring",
        href_lambda: "https://kotlinlang.org/docs/lambdas.html#passing-trailing-lambdas",
    }
})