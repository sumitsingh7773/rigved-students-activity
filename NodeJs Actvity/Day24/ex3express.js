let express=require ('express');
let app = express();
app.listen(3003,() =>console.log('server is running 3003'));
app.get('/',(request,response)=>{
    response.send('Hello World!');

});
app.get('/employee',(request,response)=>{
    let emp = { id:101, name:"Vijay", salary:35000};
    response.json(emp);

});
app.get('/employees',(request,response)=> {
    let employeeArray=[
        {id:102,name:"Anil",salary:25000},
        {id:103,name:"Suresh",salary:45000},
        {id:104,name:"Raju",salary:55000}
    ];
    response.json(employeeArray);
});