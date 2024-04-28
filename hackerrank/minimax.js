function getMinMax(arr){
    let minValue = 0;
    let maxValue = 0;
    let sorts = arr.sort(function(a, b){return a-b});
    console.log(sorts);

    for(var i = 0; i < sorts.length - 1; i++){
        minValue = minValue + sorts[i]; 
    }

    for(var i = 1; i < sorts.length; i++){
        maxValue = maxValue + sorts[i]; 
    }

    console.log(minValue ,maxValue)
}

let arr = [1, 3, 5, 7, 9];
getMinMax(arr)