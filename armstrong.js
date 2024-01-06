function arms(num) {
  let temp;
  let sum = 0;
  let rem;
  rem = num;
  while (num > 0) {
    temp = num % 10;
    sum = sum + temp * temp * temp;
    num = parseInt(num / 10);
    console.log(sum, rem);
  }
  if (sum == rem) {
    console.log("Yes");
  } else {
    console.log("no");
  }
}

arms(92727);

function check(number) {
  const numberOfDigits = number.length;
  let sum = 0;

  // create a temporary variable
  let temp = number;

  while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }

  if (sum == number) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
}

check(92727);
