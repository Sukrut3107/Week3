const express = require("express")
const app = express();
app.use(express.json());

//function that return a boolean if age of person is above 18
//This is dump way
// function isOldEnough(age){
//     if(age>=18){
//         return  true;
//     }
//     else{
//         return false;
//     }
// }

//Using middleware
function isOldEnough(req,res,next){
    let age = req.query.age;
    if(age>=18){
        next();
    }
    else{
        res.json({
            msg:"Sorry You are not allowed"
        })
    }
}


//you can use like below
app.get("/ride1",isOldEnough,(req,res)=>{
    res.json({
        msg:"Your ride1 is scheduled!"
    })
})

//or you can use like this
app.use(isOldEnough); //this will trigger endpoints below not above
app.get("/ride2",(req,res)=>{
      res.json({
        msg:"Your ride2 is scheduled!"
    })
})





app.listen(3000);