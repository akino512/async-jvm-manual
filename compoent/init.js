(() => {
    const dir = 'compoent'
    const srcArr = [
        // `./${dir}/MApp.js`,
        `./${dir}/MBook.js`,
        `./${dir}/MBookcase.js`,
        `./${dir}/MContent.js`,
        `./${dir}/MFull.js`,
        `./${dir}/MImage.js`,
        `./${dir}/MMedia.js`,
        `./${dir}/MMenu.js`,
        `./${dir}/MNavi.js`,
        `./${dir}/MParagraph.js`,
        `./${dir}/MPrevNext.js`,
        `./${dir}/MReference.js`,
        `./${dir}/MText.js`,
        `./${dir}/MTitle.js`,
        `./${dir}/MVideo.js`,
    ]
    for (const src of srcArr) {
        TOOL.addScript(src)
    }
})()