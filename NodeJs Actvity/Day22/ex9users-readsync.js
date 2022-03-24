let fs = require("fs");
let data = fs.readFileSync("users.txt");
let userInfo = data.toString();
let userItems = userInfo.split(";");

// object/array destructure syntax
let [id,name, age, gender,salary] = userItems;
console.log(`Id:${id},Name: ${name}, Age: ${age}, Gender: ${gender},Salary:${salary}`);
