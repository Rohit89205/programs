// map

// its used for creating new arr from exisitng one, by applying a fn to each one of the element of the first arr.

const numArr = [1,2,3,4];

/// polyfills for map
Array.prototype.myMap = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i , this));
    }
    return temp;
}

const multiplethreee = numArr.myMap((currElem, index) => {
    return currElem * 3
});

// console.log(multiplethreee, 'three console');


/// filter work

// pollyfill for filter

Array.prototype.myFilter = function(cb){
    let tempp = [];
    for (let i = 0; i < this.length; i++) {
      if(cb(this[i], i, this))  tempp.push(this[i])
    }
return  tempp
}

const moethantwo = numArr.myFilter((num) => {
    return num > 2;
})

// console.log(moethantwo);


const sum = numArr.reduce((acc, curr, i, arr) => {
    return acc + curr
}, 0)

// console.log(sum, 'sum')



// map vs foreach

const arr = [2,4,5,6,8,9,1];
//// return new array 
let arrMap = arr.map((data, index) => {
    return data + 2;
})

// console.log(arrMap);

/// not return new array, but can moidfies the same array;
let eachArr = arr.forEach((data, i) => {
    return data + 1;
    // arr[i] = data + 3;
});

console.log(eachArr, arr);