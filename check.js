// console.log(count)

// const count = 1;

// function abc(){
//     console.log(x)

//     var x = 10;
//     // var x
// }

// abc()
var test = 10;
function gtr() {
  if (test === undefined) {
    var test = 6;
    return test;
  } else {
    return 10;
  }
}
// console.log("print", gtr());

const x = 1;
{
  console.log(x); // ReferenceError
  // const x = 2;
}

// printHello()
// hello

// printDillion()
// ReferenceError: printDillion is not defined

function printHello() {
  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}

// ReferenceError: Cannot access 'Animal' before initialization

class Animal {
  constructor(name) {
    this.name = name
    console.log(this.name, 'hjjh')
  }
}

// const Dog = new Animal("Bingo")
// console.log(Dog, 'name')
hosting()


function hosting(){
  var salary = '1000';

  console.log(salary, 'salary');

  var salary = 5000;

  console.log(salary, 'new sal')
}

