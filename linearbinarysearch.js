function linear(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return i;
    }
  }
  return -1;
}

function binary(arr, elem){
    let low;
    let  mid;
    let high;

    

}

let arr = [2, 8, 11, 32, 66, 100, 104, 208, 400];
let elem = 208;
console.log(linear(arr, elem));
