let fs=require('fs');
let emp = fs.readFileSync('emp1.json');
let jsonString=emp.toString();
let jsobj=JSON.parse(jsonString);
for(let i=0;i<jsobj.length;i++){
    let{id, name, age,salary}=jsobj[i];
    console.log(`Id:${id}Name: ${name}, Age: ${age}, Salary: ${salary}`)
}