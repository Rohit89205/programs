// let rate = 6;

// function getRate() {
//     console.log(rate, 'outer rate')
//   if (rate == undefined) {
//     console.log(rate, 'rate')
//     let rate = 12;
//     return rate;
//   } else {
//     return 10;
//   }
// }

// console.log(getRate());

// (function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2)
//     }, 1000);
//     setTimeout(function(){
//         console.log(3)
//     }, 0);
//     console.log(4)
// })()

let inp = 'plasticCup'
console.log(inp.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase());

// console.log(inp.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase());