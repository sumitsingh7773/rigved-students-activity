let express=require ('express');
let app = express();
app.listen(3004,() =>console.log('server is running 3004'));
app.get('/',(request,response)=>{
    response.send('Hello Sumit ');

});

app.get('/employeeData',(request,response)=> {
    let employeeArray=[
        {id:201,name:"Vikash",age:24,salary:25000},
        {id:202,name:"Nikhil",age:25,salary:45000},
        {id:203,name:"Saurabh",age:24,salary:35000},
        {id:204,name:"Shubham",age:23,salary:25000},
        {id:205,name:"Sumit",age:25,salary:25000},
        {id:206,name:"Anchit",age:26,salary:55000},
        {id:207,name:"Nitesh",age:27,salary:45000},
        {id:208,name:"Anil",age:28,salary:35000}
    ];
    response.json(employeeArray);
});