const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-check",(req,res)=>{
const kidneys = req.body.kidneys;
const kidneyLength = kidneys.length;
    res.send("you have : "+kidneyLength+" kidneys");
});
//Glocal cache
app.use((err,req,res,next)=>{
    res.json({
        msg:"Something is up with our server"
    });
})

app.listen(3000);