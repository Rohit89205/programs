let a = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
let lIndex = 0;
let rIndex = 9;
let value = 5;
let n = 10;

function linearsearch() {
  // console.log(typeof value, 'value', value, 'n')   no of processors = 1 + 11 + 10 + 10 + 1   /// 1 + (n + 1) + n + n + 1  = 3n + 3
  let check;
  for (let i = 0; i < n; i++) {
    // console.log(a[i], 'adsj', i)
    if (a[i] == value) {
      //   check = value;
      return i;
    } else if (a[i] != value) {
      check = -1;
      //   return -1;
    }
  }
  return check;
}

// console.log(linearsearch());

function binarySearch(a, lIndex, rIndex, value) {
  while (lIndex <= rIndex) {
    let middle = Math.floor((lIndex + rIndex) / 2);
    if(a[middle] == value){
        return middle
    } 
    else if (a[middle] < value){
        lIndex = middle + 1;
    } else{
        rIndex = middle - 1;
    }
    // console.log(middle);
  }
  return  -1;
}

console.log(binarySearch(a, lIndex, rIndex, value));
