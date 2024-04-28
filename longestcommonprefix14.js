// let strs = ["flower", "flow", "flight"]; /// ['flight'. 'flower', 'flow']

let strs = ["cat", "car", "dog"];
const array1 = [1, 30, 4, 21, 100000];

function compareNumbers(a, b) {
  return a - b;
}

// strs.sort();
// console.log(strs);

// array1.sort(compareNumbers);
// console.log(array1);

function prefix(strs) {
  strs.sort();
  let ans = "";
  str1 = strs[0].split("");
  str2 = strs[strs.length - 1].split("");

  //   console.log(str1, str2);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) {
      ans = ans + str1[i];
    } else {
      break;
    //   return ""
    }
  }
  return ans;
}

console.log(prefix(strs));
