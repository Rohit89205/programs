

// function checktime(n, m){
//     let count = 1;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < m; j++){
//             console.log(i, '', j);
//             console.log(count++, 'count');
//         }
//     }
// }

// checktime(5, 6)


/// recursive function 

// function recursion(n, count){
//     if(n <= 0){
//         return 0;
//     } else {
//         console.log(n, 'n data', count);
//         count++
//         recursion(n - 1, count)
//     }
// }

// let count = 0
// recursion(10, count)

function isPrime(n){
    let count = 0;
    for(let i = 2; i * i < 10000; i++){
        if(n % i == 0){
            count++
            console.log(count, 'count')
            return 0;
        }
    }
}

// isPrime(18)

// console.log(18 % 2);

// const x = 'absome string';
// console.log(x.substring(0, 2));


const users = [
    {
        name: 'rohit', age: '26'
    },
    {
        name: 'rahul', age: '75'
    },
    {
        name: 'kartik', age: '50'
    },
    {
        name: 'sukhe', age: '26'
    }
]

let output = users.reduce((acc, cur) => {
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age]
    } else{
        acc[cur.age] = 1
    }
    return acc;
}, {});

// console.log(output, 'irjgtoe')

let ageFil = users.filter((x) => x.age > 30).map((x) => x.name);

console.log(ageFil, 'asdhjj')