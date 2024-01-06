/// function declaration

function squares(num) {
  return num * num;
}

//// function expression

const square = function (num) {
  return num * num;
};

// console.log(square(2));

/// first class function
function displaySqr(fn) {
  console.log(fn(2));
}

displaySqr(square);

// what is IIFE (Immediately invoked functions)
(function cube(num) {
  console.log(num * num * num);
})(3);

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

/// function scope
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 500);
// }


var x = 21;

function sum(){
    console.log(x, 'asd');

    var y = 20;
}

sum()



/// params vs arguemts

function done(num){   //// called params
    console.log(num + num)
}

done(4) /// called arguments



///spread and rest operator

function check(a, b, c, ...nums){   /// called as rest operator
    console.log(nums[0] + nums[1])
}

const arr = [5,6,7,8];

check(...arr)   //// called as spread operator


/// arrow functions

const add = (x,y) => {
    console.log(x+y);
}

add(2,3);


//  diff b/w arrow and normal fun

// syntax
// implict return keyword
// arguments

function check(){
    console.log(arguments)
}

check([1,2,3]);

//  use of this keyword


let username = "Baba"
let user = {
    username: "Rohit",

    rc1: () => {
        console.log("hello ", this.username)
    },
    rc2() {
        console.log("Hii", this.username)
    }
}

user.rc1();
user.rc2();