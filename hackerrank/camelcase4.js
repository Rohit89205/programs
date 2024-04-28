function camelCase(operation, type, input){
    // let [operation, type, input] = value.split(';');
    // console.log(input, 'input')
    if(operation === 'S'){
        return splitCamelCase(type, input);
    } else if(operation === 'C') {
        return combineCamelCase(type, input);
    }
}

function splitCamelCase(type, input){
    if(type === 'M'){
        input = input.slice(0, -2);
        // console.log(input, 'inp')
    }
    // console.log(input.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase());
    return input.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

function combineCamelCase(type, input) {
    // Split the words by space
    let words = input.split(' ');

    if (type === 'M') {
        // For method names, add parentheses
        return words.join('') + '()';
    } else {
        // Capitalize the first letter of each word except the first one
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        // Join the words and return
        return words.join('');
    }
}

// console.log(camelCase('S;M;plasticCup()'));

// Sample input
const input = [
    'S;M;plasticCup()',
    'C;V;mobile phone',
    'C;C;coffee machine',
    'S;C;LargeSoftwareBook',
    'C;M;white sheet of paper',
    'S;V;pictureFrame'
];

// Process each input line
input.forEach(line => {
    const [operation, type, value] = line.split(';');
    console.log(camelCase(operation, type, value));
});