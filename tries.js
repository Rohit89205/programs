// let x = 20;

// function foo(){
//     console.log(x, 'x ka ans');
//     x = 10;

// }

// foo()

// console.log(x, 'x ka ans');

// foo();
// var foo = 20;
// function foo(){
//     console.log('Calling foo');
// }

// foo()

// 3

// setTimeout(() => {
//     console.log('Timeout')
// }, 0)
// Promise.resolve().then(() => {
//     console.log('Promise')
// })

// console.log('End')

// async function foo(){
//    return 'Hello World'
// }

// const result = foo();
// console.log(result)

// (async function (){
//     const result = await foo();
//     console.log(result)
// })()

// console.log([1,2] === [1,2]);
// console.log(1 == 1);

// const user1 = {
//     name: 'Rohit',
//     age: 24,
//     address: {
//         city: 'Delhi',
//         Country: 'India'
//     }
// }

// // const user2 = {...user1, address: {...user1.address}};
// const user2 = structuredClone(user1)

// user2.name = 'Rahul',
// user2.address.city = 'UP'

// console.log(user1)
// console.log(user2)

// function abc(){
//     // return 'Hii'
//     console.log('Hii')
// }

// const value = new abc();
// console.log(value)

function add(x) {
  return function (y) {
    return x + y;
  };
}

// const output = add(10)(20)
// console.log(output, 'outp')

function add(x, y) {
  // return function (y){
  return x + y;
  // }
}

// function checks(a) {
//   console.log(arguments.length, "args");
//   if (arguments.length > 1) {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
//   } else {
//     return function (b) {
//       return a + b;
//     };
//   }
// }

// let sum = (a) => {  
//     return (b) => {
//       // return b ? sum(a + b) : a
//       return sum(a + b);
//     };
// }

let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(30)());
// console.log('With Closure', checks(10, 20, 30));

// const obj = { prop: 10 };
// const arr = [obj]
// arr[0].prop = 20;

// console.log(obj.prop)
