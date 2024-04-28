let name1 = {
    firstName: "Rohit",
    
}
let printfullname = function (hometown) {
    console.log(this.firstName, '', hometown)
}



let name2 = {
    firstName: "Preeti",
}

/// its an example of function borrowing
printfullname.call(name1, 'Delhi')

printfullname.call(name2, "Lucknow")


// exactly as call method but passed arguemnts in array not in just like call methods
printfullname.apply(name2, ["Lucknow"])






