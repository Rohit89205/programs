function checkSrtings(strings, queries){
    let result = [];
    let count = 0;
    for(let i = 0; i < queries.length; i++){
        for(let j = 0; j < strings.length; j++){
            if(queries[i] === strings[j]){
                count++;
            }
        }
        result.push(count);
        count = 0;
    }
    return result;
}


// let strings = ['ab', 'ab', 'abc'];  /// [2,1,0]
// let queries = ['ab', 'abc', 'bc'];

// let strings = ['aba', 'baba', 'aba', 'xzxb'];  /// [2,1,0]
// let queries = ['aba', 'xzxb', 'ab'];

// let strings = ['def', 'de', 'fgh'];  /// [1,0,1]
// let queries = ['de', 'lmn', 'fgh'];

let strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];  /// [1,3,4,3,2]
let queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

console.log(checkSrtings(strings, queries))