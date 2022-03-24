let read = require("readline-sync");
//question() is the function that waits for user to enter input
let EmpId = read.question("Enter EmpId: ");
let name = read.question("Enter name: ");
let age = read.question("Enter age: ");
let salary = read.question("Enter salary: ");
console.log(` Hello EmpId ${EmpId}, your Name is ${name},your Age is ${age},your Salary is ${salary}`);