let express = require("express");
let app = express();
let PORT=3001;
app.listen(PORT , () => {console.log(`Express server is running at ${PORT}`)});
app.get('/Employee',(req,res) => {
    res.json({"Id":101, "name":"Raj","Age":31});

});

