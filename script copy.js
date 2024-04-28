const pro1 = new Promise((res, rej) => {
  document.getElementById("resolve").addEventListener("click", () => {
    res("Promise Resolved");
  });

  document.getElementById("reject").addEventListener("click", () => {
    rej("Promise Rejected");
  });
});

// pro1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const handlefunction = async () => {
    // throw new Error;
    try{
        let res = await pro1
        console.log(res)
        return res;
    }catch(err){
        console.log(err)
    }
}

const res = handlefunction();

console.log(res)


"use strict"

// console.log("Start");
// import { variable } from "./script1.js";

// console.log(variable, 'var')


// let anything = "10"

const student = {
    name: "Rohit",
    printname: function(){
        // const y = () => {
        //     console.log(this, 'this')
        // }
        console.log(this)
        // y()
    }
}

const student2 = {
    name: "Preeti"
}

student.printname();
// student.printname.call(student2);