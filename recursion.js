var sum = 1;

function rec(num) {
  if (sum > 10) {
    return "Stop";
  }
  let value = sum * num;
  console.log(num, "*", sum, "=", value);
  sum++;
  rec(num);
}

// rec(2);

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
let mynew = []
var i = 0;
let j = 1;
function sortArray(arr) {
  if (isSorted(arr)) {
    mynew = arr;
    return;
  } else {
    if (arr[i] < arr[j]) {
      i++;
      j++;
      sortArray(arr);
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i = 0;
      j = 1;
      sortArray(arr);
    }
  }
}
sortArray([2, 3, 1, 4]);

console.log(mynew, 'ans')
