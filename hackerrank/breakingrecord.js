function breakingRecords([hl, ...scores]){
    var low = hl;
    var high = hl;
    let lRes = 0;
    let hRes = 0;

    scores.forEach((score) => {
        if(score < low){
            low = score;
            lRes++
        } else if(score > high){
            high = score;
            hRes++
        }
    })
    return [hRes, lRes]
    // for(var i = 0; i < scores.length; i++){
    //     if(firstMax < scores[i]){
    //         maxCount++;
    //         firstMax = i;
    //     }
    //     else if(firstMin < scores[i]){
    //         minCount++;
    //         firstMin = i;
    //     }
    // }
    // return [maxCount, minCount];
}

console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42]))