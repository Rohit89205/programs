function calcgrades(grades){
    // console.log(grades, 'grades')
    let ans = []
    grades.forEach(ele => {
        if(ele > 37 && (ele % 5 > 2)){
            // console.log(ele % 5, 'elem')
            ans.push(ele + ((ele % 5 === 3) ? 2 : (ele % 5 === 4) ? 1 : 0))
            
        }else if (ele > 37 && (ele % 5 == 0)){
            ans.push(ele)
        } else if(ele > 37 && (ele % 5 < 3)) {
            ans.push(ele)
        } else if(ele <= 37){
            ans.push(ele)
        }
    });
    return ans
}

// let grades = [38,25,45,65,78,71,67,84,29,57];
// let grades = [73,67,38,33];
let grades = [37,38];


console.log(calcgrades(grades))

// console.log(52%5)  /// 2
// console.log(84%5)  /// 4
// console.log(57%5)  /// 2
// console.log(56%5)  /// 2
// console.log(58%5)  /// 2

