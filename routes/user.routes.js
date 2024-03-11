const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {UserModel} = require("../models/user.model");
const userRouter = express.Router();



// Registration
userRouter.post("/register", async(req,res)=>{
    const {name, email, password} = req.body;
    try{
       bcrypt.hash(password,5, async(err, hash)=>{
        if(err){
            res.status(401).send({msg:"Error:err"})
        }else{
            const user = new UserModel({name, email, password:hash});
            await user.save();
            res.status(201).json({msg:"User Registered Successfully", user})
        }
       });
      
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})



// Login
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(401).json({ msg: "Invalid Email or Password" });
                }
                if (result) {
                    const token = jwt.sign({ userID: user._id }, "prits");
                    res.status(201).json({ msg: "Login Successful", user, token });
                } else {
                    res.status(401).json({ msg: "Invalid Email or Password" });
                }
            });
        } else {
            res.status(401).json({ msg: "Invalid Email or Password" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

module.exports = {
    userRouter
}