function flipping(n) {
  const binaryText = (+n).toString(2).padStart(32, "0").split("");
  console.log(binaryText);

  console.log("<<<<<<<<<<<<<<<<===============>>>>>>>>>>>>>>>>");

  let res = [];
  for (let i = 0; i < binaryText.length; i++) {
    res.push(binaryText[i] === "0" ? "1" : "0");
  }

  const str = res.toString().split(",").join("");

  let output = parseInt(str, 2);

  console.log(output);
}
let n = 9;
flipping(n);
