const express = require("express");
const app = express(); 

const z = require("zod");
const schema = z.array(z.number());

app.use(express.json());

app.post("/health-check",(req,res)=>{
const kidneys = req.body.kidneys;
const response = schema.safeParse(kidneys)
res.send({
    response
})
});

app.listen(3000);
