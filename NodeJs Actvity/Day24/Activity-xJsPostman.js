let fs = require("fs");
data = fs.readFileSync("Empdata1.json");
dataString = data.toString();
employeeArray = JSON.parse(dataString);
console.log(employeeArray);
let express = require("express");
let app = express();
app.listen(3004,()=>{
console.log('Server is running on Port 3004');
});
app.get('/',(request,response)=>{
    response.send("Hello Sumit! ");
});
app.get('/EmployeeData',(request,response)=>{
    response.json(employeeArray)
});