function diag(arr){
    console.log(arr[0][0], 'as')
    let ltrDiag = 0;
    let rtlDiag = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        ltrDiag += arr[i][i]    /// 11, 5, -12
        rtlDiag += arr[i][arr.length-i-1] /// 4, 5, 10
    }
    return Math.abs(ltrDiag - rtlDiag)
}

let inpArr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
console.log(diag(inpArr))