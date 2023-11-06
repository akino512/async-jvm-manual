GLOBAL.sections.push({
    title: "问题3：线程阻塞1（中）",
    read: function () {
        const element = document.createElement("div")
        const t = MTitle(this.title)

        const p1 = MParagraph()
        const i1_1 = MMedia("image-one_thread_per_con­nec­tion", [MImage("one_thread_per_con­nec­tion.svg")])
        const t1_1 = MText(`
        Tomcat是传统的Java Servlet应用，其本身被设计为“一连接一线程”的模式。<br />
        即每当收到客户端请求，便会分配一个线程来处理请求直到return被调用。<br />`)
        const i1_2 = MMedia("image-thread_blocking", [MImage("thread_blocking.svg")])
        const t1_2 = MText(`
        因此对于线程数的需求也会随着请求并发量的增长而增长。<br />
        但是线程是宝贵的资源，创建线程伴随着昂贵的运算开销。<br />
        虽然池化技术让线程可以被复用，但是维持大量的线程带来的硬件压力依然不小。<br />
        而这样的数据交互方式，也被称为同步通信(synchronous communication)。
        `)

        const p2 = MParagraph()
        const i2 = MMedia("image-nodejs", [MImage("nodejs.webp")])
        const t2 = MText(`
        异步通信(asynchronous communication)则与之相对，其利用事件驱动、非阻塞模型，允许少量线程同时处理多个网络连接。<br />
        随着开源社区的蓬勃发展，大量基于异步通信的应用涌现，这其中也包括大名鼎鼎的Node.js。<br />
        `)
        // 而其后The Reactive Manifesto<i id="href_reactivemanifesto"></i>的提出无疑是异步软件应用发展史上的又一里程碑。<br />

        const p3 = MParagraph()
        const i3 = MMedia("image-spring_flux",
            [MImage("spring_flux(1).png"), MImage("spring_flux(2).png")])
        const t3 = MText(`
        Netty<i id="href_netty"></i>则是另一个十分有代表性的基于异步通信的网络服务应用。<br />
        Netty的出现弥补了JVM应用中Tomcat在处理大量连接时，无法有效利用线程资源的缺陷。<br />
        虽然Spring官方也提供了webflux扩展<i id="href_springflux"></i>用以支持Netty，但是其冗杂程度让人望而却步。<br />
        `)

        const p4 = MParagraph()
        const i4 = MMedia("image-event_loop", [MImage("event_loop.svg")])
        const t4 = MText(`
        与Spring不同的是，Vert.x<i id="href_introductiontovertx"></i>是天然基于Netty的网络服务应用。<br />
        Vert.x沿袭了reactor pattern<i id="href_href_reactorpattern"></i>，单线程的event loop可以保证程序顺序执行，异步函数可以避免线程阻塞。<br />
        熟悉node.js的读者对此应该不会感到陌生，但与node.js不同的是单个Vert.x应用可以维持多个event loop，以适配多核硬件。<br />
        使用Vert.x，开发者能够构筑高效、稳定、可扩展的网络服务应用。<br />
        `)

        p1.appendChild(i1_1)
        p1.appendChild(t1_1)
        p1.appendChild(i1_2)
        p1.appendChild(t1_2)


        p2.appendChild(i2)
        p2.appendChild(t2)
        p3.appendChild(i3)
        p3.appendChild(t3)
        p4.appendChild(i4)
        p4.appendChild(t4)
        element.appendChild(t)
        element.appendChild(p1)
        element.appendChild(p2)
        element.appendChild(p3)
        element.appendChild(p4)
        return element
    },
    refs: {
        // href_reactivemanifesto: "https://www.reactivemanifesto.org",
        href_netty: "https://netty.io/",
        href_springflux: "https://spring.io/guides/gs/reactive-rest-service",
        href_href_reactorpattern: "https://en.wikipedia.org/wiki/Reactor_pattern",
        href_introductiontovertx: "https://vertx.io/introduction-to-vertx-and-reactive",
    }
})