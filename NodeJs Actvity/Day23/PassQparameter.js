let http=require('http');
let url1=require('url');
let fs=require('fs');
let port_no=3001;
http.createServer((request,response)=>{
    let urlString=request.url;
    console.log(urlString);
    if(urlString!='/favicon.ico'){
        let urlObject=url1.parse(urlString,true);
        let user=urlObject.query;
        console.log(user);
        let data=fs.readFileSync('emp.json');
        let dataString=data.toString();
        let jsArray=undefined;
        if(dataString.length<1 || dataString==''){
            jsArray=[];
        }
        else
        {
            jsArray=JSON.parse(dataString);
        }
        jsArray.push(user);
        jsonObjectArray=JSON.stringify(jsArray);
        console.log(jsonObjectArray);
        fs.writeFileSync('emp.json',jsonObjectArray);
        response.writeHead(200,{'content-type':'text/html'});
        response.write(`<h2>Hello ${user.name}, your age is ${user.age}</h2>`);
    }
    response.end();
}).listen(port_no,()=>console.log(`Server running at ${port_no}`))