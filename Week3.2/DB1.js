const mongoose = require("mongoose"); 
mongoose.connect("mongodb+srv://sukrut515:$9284488012Sb@cluster0.pupu6jy.mongodb.net/userrappnew");
const express = require("express");
const app = express();
app.use(express.json());
const User = mongoose.model('Users',{name:String,email:String,
    password:String});

app.post("/Signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    //create CRUD This only POST 
    const existingUser = await User.findOne({email:username});

    if(existingUser){
        return res.status(403).send("User alreday exists in Db!");
    }

    const user = new User ({
        name: name,
        password:password,
        email:username
    });
    try{
        await user.save();
        res.json({"msg":"User created successfully"});
    }catch(err){
        res.status(500).json({"err":"Error while creating a user in Db!"})
    }
})

app.listen(3000);

