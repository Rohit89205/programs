function getOutput() {
  let arrs = [-4, 3, -9, 0, 4, 1];
  let positive = 0;
  let negative = 0;
  let zero = 0;

  console.log(arrs);

  for (var i = 0; i < arrs.length; i++) {
    if (arrs[i] > 0) {
      positive++;
    } else if (arrs[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / arrs.length).toFixed(6));
  console.log((negative / arrs.length).toFixed(6));
  console.log((zero / arrs.length).toFixed(6));
}

getOutput()

// console.log(posValue, 'pos')
// console.log(negative, 'neg')
// console.log(zero, 'zero')
