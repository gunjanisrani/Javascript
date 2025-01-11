//Datatypes in JavaScript

const myName="Gunjan israni"; //string
console.log(myName);

let age=18; //numbers
console.log(age);

let x=null; //empty value
console.log(x);

const z=true; //boolean value

let y=undefined; //value not known
console.log(y);

//Objects in JavaScript
const student={
    name: "Gunjan",
    age: 18,
    cgpa: 9.6,
    isPass: true,
};

console.log(student["age"]); //accessing elements
console.log(student.cgpa);

student["age"]= student["age"]+ 1; //modification
console.log(student.age);
