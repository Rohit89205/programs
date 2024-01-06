function sq(n){
    return n * n;
}

let a = 'Rohit'
// console.log(sq(45));



function squareRoot(num){
    let sum = num / 2;
    let temp = 0;

    while(sum !== temp){
        temp = sum;
        sum = (num / sum + sum) / 2;
    console.log(sum, 'sum')

    }
    // return sum
    // return Math.sqrt(num)
}

console.log(squareRoot(64));