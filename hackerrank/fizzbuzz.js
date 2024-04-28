function fixxbuzz(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
            // return "FizzBuzz"
        } else if(i % 3 != 0 && i % 5 != 0){
            console.log(i)
            // return i
        } else if(i % 3 == 0){
            console.log("Fizz")
            // return "Fizz"
        } else {
            console.log("Buzz")
            // return "Buzz"
        }
    }
    return
}

let n = 15;
console.log(fixxbuzz(n))