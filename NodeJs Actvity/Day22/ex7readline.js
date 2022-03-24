let read = require("readline-sync");
//question() is the function that waits for user to enter input
let name = read.question("Enter you name: ");
let age = read.question("Enter your age: ");
let course = read.question("Enter your course: ");
console.log(`Hello ${name}, your age is ${age},Course is ${course}`);

//questionInt() returns int value
let num1 = read.questionInt("Enter a number: ");
let num2 = read.questionInt("Enter another number: ");
let result1 = num1 + num2 ;
let result2= num1 - num2 ;
let result3= num1 * num2 ;
let result4 = num1 / num2 ;
console.log(`Result = ${result1}, ${result2}, ${result3},${result4}`);