// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P1 Success")
//     // }, 1000);
//     setTimeout(() => {
//         reject("P1 Failed")
//     }, 1000);
// })

// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("P2 Success")
//     // }, 2000);
//     // setTimeout(() => {
//     //     reject("P2 Failed")
//     // }, 2000);
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("P3 Success")
//     }, 5000);
// })

// Promise.race([p1,p2,p3]).then((res) => {
//     console.log(res, 'res from all')
// }).catch((err) => {
//     console.log('Error from Primise All', err)
// })


const newpro = new Promise((res, rej) => {
    // res("Promise Fullfilled")
    rej("Promise Reject")
})

newpro.then((res) => {
    console.log('RES!!', res)
}).catch((err) => {
    console.log('ERROR!!', err)
})