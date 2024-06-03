const express = require("express");
const app = express();

app.get("/healthcheck",(req,res)=>{
     const username = req.headers.username;
     const password = req.headers.password;
     const kidneyId = req.query.kidneyId;
 
    if(username != "harkirat" || password !="pass1"){
     res.status(400).json({"msg":"Somrthing is wrong with your username or password inputs"})
     return
    }
 
    if(kidneyId !=1 && kidneyId !=2){
         res.status(400).json({"msg":"Something is wrong with your kidney inputs"})
         return
    }
 
    res.json ({
     msg:"Your kidney is fine!"
    })
 
 
 });

 app.listen(4000);