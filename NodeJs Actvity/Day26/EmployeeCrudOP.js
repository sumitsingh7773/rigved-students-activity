let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");// referencing top level express function 
const { json } = require("body-parser");
let app = express();
// database url
let dbURL = "mongodb://localhost:27017";
// express server port
let PORT = 3002;

// start the express server
app.listen(PORT, () => console.log(`Server running in ${PORT}`));

// middleware to parse request & enable cors
app.use(parser.json());
app.use(cors());

//GET THE USERS DATA
app.get("/users",(request,response)=>{
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db("EMPLOYEES");
        let cursor=db.collection("Empdata1").find();
        let users=[];
        cursor.forEach((doc,err)=>{
            if (err) throw err;
            users.push(doc);
        }, () =>{
            response.json(users);
            client.close();

        
        });
    });
});

//POST THE EMPLOYEE DATA
app.post("/users",(request,response)=>{
    let userDocument=request.body;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error)throw error;
        let db=client.db("EMPLOYEES");
        db.collection("Empdata1").insertOne(userDocument,(err,res)=>{
            if(err){
                response.status(409).json({"message":`User with an id ${userDocument._id} exists`});
            }
      response.status(201).json(res);
      client.close();
            });
        });
});
// Getting single  documents based on the _id
app.get("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("EMPLOYEES");
        db.collection("Empdata1").findOne({_id:id})
        .then((doc) => {
            if(doc != null) {
                response.json(doc);
            } else {
                response.status(404).json({"message":`Sorry ${id} doesn't exist`})
            }
            client.close();
        });
    });
});
// DELETE: /users/:id to delete the Employee Data based on id
app.delete("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("EMPLOYEES");
        db.collection("Empdata1").deleteOne({_id:id})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});
// UPDATE(PUT):Salary update from Employee id
app.put("/users/:id/:Salary", (request, response) => {
    let id = parseInt(request.params.id);
    let SalaryNew = parseInt(request.params.Salary);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error) throw error;
        let db = client.db("EMPLOYEES");
        // use the collection 'user' and updateOne() to update the age on id
        db.collection("Empdata1").updateOne({_id:id}, {$set:{Salary: SalaryNew}})
        .then((doc) => {
            response.json(doc);
            client.close();
        })
    });
});