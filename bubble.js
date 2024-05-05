document.querySelector("#gradnparnt").addEventListener("click", (e) => {
    console.log('GP Click')
    // e.stopPropagation()
}, false)

document.querySelector("#parent").addEventListener("click", (e) => {
    console.log('P Click')
}, false)

document.querySelector("#child").addEventListener("click", (e) => {
    console.log('C Click', e)
}, false)

// document.querySelector("#parent", () => {
//     console.log('P Click')
// })

// document.querySelector("#child", () => {
//     console.log('C Click')
// })