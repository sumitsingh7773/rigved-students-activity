let mongoose=require("mongoose");
let dbURL="mongodb://localhost:27017/mydb";
mongoose.connect(dbURL);
let db=mongoose.connection;
db.once('open',()=>{
    let doc={_id:131,name:"Rupesh",age:35}
    let userSchema=mongoose.Schema({_id:Number,name:String,age:Number});
    let UserModel=mongoose.model('User',userSchema,'user');
    let user=new UserModel(doc);
    user.save((err,res)=>{
        if(err) throw err;
        console.log(`Stored ${res.name}`)

    });
});