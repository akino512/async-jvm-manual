GLOBAL.sections.push({
    title: "问题2：线程安全2",
    read: function () {
        const element = document.createElement("div")
        const t = MTitle(this.title)

        const p1 = MParagraph()
        const i1 = MMedia("image-app-2-1", [MImage("app-2-1.png")])
        const t1 = MText(`
        如果有超过1000人购票，就需要处理售罄的情况。重新编写代码，如image-2-1。<br />
        现在我们加一个余票数判断，仅当ticketCount大于0时，调用扣款服务，如line46。<br />
        为了方便表示，ticketCount小于等于0的请求输出X，表示未买到票，如line47。<br />
        将请求数增加到1010，也就是说预期将有10个人买不到票（输出10个X）。<br />
        `)

        const p2 = MParagraph()
        const v2 = MMedia("video-app-2-1", [MVideo("app-2-1.mp4")])
        const t2 = MText(`
        执行程序，如video-app-2-1。<br />
        预期输出X的请求却输出负数，说明超过1000张票被售出了，不符合预期。<br />
        这是另一种常见的线程安全问题，race condition。<br />
        原因是原子类型只能保证ticketCount增减的同步性，但是不能保证整段代码同步执行。<br />
        比如当还剩一张票的时候，可能有两个线程同时判定为可购买状态，<br />
        进而两次调用扣款服务，执行两次ticketCount减1，此时ticketCount将变为-1。<br />
        `)

        const p3 = MParagraph()
        const v3 = MMedia("video-app-2-2", [MVideo("app-2-2.mp4")])
        const i3 = MMedia("image-app-2-2", [MImage("app-2-2.png")])
        const t3 = MText(`
        利用原子性的ticketCount，让每个请求都先执行ticketCount.decrementAndGet()，返回值作为编号，即-10~999。<br />
        然后将编号-10~-1视为购票失败，0~999视为购票成功。如此便可避免该问题。编写代码如image-2-2。<br />
        执行程序，得到正确结果，如video-2-2。<br />
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

        return element
    }
})