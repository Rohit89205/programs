// function f(a,b,c){
//     m = ["1", "2", "3"];
//     a = 3;
//     b[0] = "X";
//     c.first = false
// }
// var x = 4;
// var y = ["A", "B", "C"];
// var z = { first: true }

// f(x,y,z)
// console.log(x,y,z)

function print(n){
    if(n == 0 || n == 1 || n == 2){
        return 0;
    }
    if(n == 3) {
        return 1;
    }
    else {
        return printCheck(n -1) + printCheck(n - 2) + printCheck(n - 3);
    }

}

function printCheck(){
    var ans = 0;
    for(var i = 1; i < n; i++){
        ans = ans + print(i) + " "
    }
    console.log(ans, 'ans')
}