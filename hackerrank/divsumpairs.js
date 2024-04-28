function divparis(n, k, arr) {
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n; j++) {
      if (i < j) {
        if ((arr[i] + arr[j]) % k === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

let n = 6;
// let k = 5;
let k = 3;

// let arr = [1, 2, 3, 4, 5, 6];
let arr = [1, 3, 2, 6, 1, 2];

console.log(divparis(n, k, arr));

// console.log((1 + 4) % 5 === 0)
