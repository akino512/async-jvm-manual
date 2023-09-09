const MNavi = () => {
    const element = document.createElement("div");
    element.style.width = "280px"
    element.style.position = "fixed"
    element.style.height = "100vh"
    element.style.background = "darkgrey 10%"
    element.style.left = 0;
    element.style.top = 0;

    const menu = MMenu();
    const pn = MPrevNext();

    element.appendChild(menu)
    element.appendChild(pn)

    return element
}

const MNaviBack = () => {
    const element = document.createElement("div");
    element.style.width = "280px"
    element.style.zIndex = "-1"
    return element
}