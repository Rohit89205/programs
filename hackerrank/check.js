function processData(input) {
  //Enter your code here
  let [operation, type, value] = input.split(";");

  if (operation === "S") {
    if (type === "M") {
      value = value.slice(0, -2);
    }
    
    console.log(value.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().trim())
    return value.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().trim();
  } else if (operation === "C") {
    let words = value.split(" ");
    // console.log(words, 'words')
    // for (let i = 1; i < words.length; i++) {
    //   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    //   // console.log(words[i].slice(1), 'in loop')
    // }
    if (type === "M") {
      for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      console.log(words.join("").trim() + "()")
      return words.join("").trim() + "()";
    } if (type === "V") {
        for (let i = 1; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        console.log(words.join("").trim())
        return words.join("").trim();
      }
     else {
      // Capitalize the first letter of each word except the first one
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      console.log(words.join("").trim())
      return words.join("").trim();
    }
  }
}

// console.log(processData("C;M;mouse pad"));
processData("C;M;mouse pad");


// S;V;iPad   ==> i pad
// S;M;plasticCup() ==> plastic cup
// S;C;OrangeHighlighter ==> orange highlighter
// S;C;LargeSoftwareBook ==> large software book
// S;V;pictureFrame ==> picture frame

// C;M;mouse pad ==> mousePad()
// C;C;code swarm ==> CodeSwarm
// C;V;mobile phone ==> mobilePhone
// C;C;coffee machine ==> CoffeeMachine
// C;M;white sheet of paper ==> whiteSheetOfPaper()
