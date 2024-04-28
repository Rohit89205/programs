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


function abc(){
    // return 'Hii'
    console.log('Hii')
}

const value = new abc();
console.log(value)