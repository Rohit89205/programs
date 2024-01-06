let students = [
  { name: "Rohit", roll: 89, marks: 90 },
  { name: "Pooja", roll: 59, marks: 80 },
  { name: "Kajal", roll: 69, marks: 30 },
  { name: "Vikas", roll: 39, marks: 50 },
];

let names = [];
// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }

for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 60) {
    names.push(students[i].name.toUpperCase());
  }
}

const detals = students.filter((stu) => stu.marks > 60 && stu.roll > 59);

console.log(names, detals)

const namess = students.map((data, index) => {
  return data.name.toUpperCase();
});

const nameeee = students.map((data) => data.name.toUpperCase());

console.log(nameeee);


let sudeata = students.reduce((acc, curr)=> acc+curr.marks, 0);

console.log(sudeata, 'sudeata')
let sum = 0;
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    sum = students[i].marks + sum; 
}

console.log(sum, 'sum');


// combine both filter and map

const namesss = students.filter((stu) => stu.marks > 60).map(data => data.name.toUpperCase());

console.log(namesss);

const final = students.map((data) => {
    if(data.marks < 60) {
        data.marks += 20;
    }
    return data;
}).filter((stu) => stu.marks > 60 ).reduce((acc, curr) => acc + curr.marks, 0)

console.log(final, 'final')