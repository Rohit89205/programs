const radius = [3,4,5,6,7];

const calculArea  = (value) => {
    let output = []
    for (let index = 0; index < value.length; index++) {
        output.push(Math.PI * value[index] * value[index])
    }
    return output;
}

// console.log(calculArea(radius));

const calArea = (radius) => {
    return Math.PI * radius * radius;
}

const calCir = (radius) => {
    return 2 * Math.PI * radius;
}

const calDia = (radius) => {
    return 2 * radius;
}

const calcalData  = (value, calArea) => {
    let output = []
    for (let index = 0; index < value.length; index++) {
        output.push(calArea(value[index]))
    }
    return output;
}

console.log(calcalData(radius, calArea));
console.log(calcalData(radius, calCir));
console.log(calcalData(radius, calDia));