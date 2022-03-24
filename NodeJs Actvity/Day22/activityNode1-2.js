let read=require('readline-sync');
let fs=require('fs');
let id=read.questionInt('Enter Empid: ');
let name=read.question('Enter your Name: ');
let age=read.question('Enter your Age: ');
let salary=read.questionInt('Enter your salary: ');
let emp={id:id,name:name,age:age,salary:salary};
let jsonString=JSON.stringify(emp);
let data=fs.readFileSync('emp1.json').toString();
if(data.endsWith('}]')==true){
    let p1=data.slice(0,(data.length-1))
    let p2=`${p1},\n${jsonString}]`
    fs.writeFileSync('emp1.json',p2);
    console.log('Done...')
}
else
{
    let p2=`[${jsonString}]`
    fs.writeFileSync('emp1.json',p2);
    console.log('Done...')
}