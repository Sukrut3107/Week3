const express = require("express");
const app = express();

function userMiddleware(req,res,next){
     const username = req.headers.username;
     const password = req.headers.password;
 if(username !="harkirat"|| password!="pass1"){
          res.status(403).json({
          msg:"Incorrcet Input in username or password"
          });
     }
     else{
          next();
     }
}

function kidneyMiddleware(req,res,next){
     const kidneyId = req.query.kidneyId;
if(kidneyId !=1 && kidneyId !=2){
          res.status(403).json({
               msg:"Incorrect input in KidneyId "
          });
     }
     else{
          next();
     }
}


app.get("/healthcheck",userMiddleware,kidneyMiddleware,(req,res)=>{
     res.send("Your Health check is fine");
})

app.get("/kidneycheck",userMiddleware,kidneyMiddleware,(req,res)=>{
     res.send("Your kidney is fine");
})
app.get("/heartcheck",userMiddleware,(req,res)=>{
     res.send("Your heart is fine");
})

app.listen(4000);

