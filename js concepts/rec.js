function rev(num) {
  if (num === 0) {
    return 1;
  } else {
    let y = num * rev(num - 1);
    console.log(y);
    return y;
  }
}

console.log(rev(5));

let counter = 2;
function table(num) {
  if (num > 10) {
    return;
  } else {
    // console.log(num, "num", counter);
    let ans = parseInt(counter * parseInt(table(num + 1)));
    console.log(ans, "ans", num, counter);
  }
}

// table(1);


let count  = 1;

function check(number){
    if(count > number){
        return;
    }
    console.log('Hello')
    count++
    check(number)
}

check(10)