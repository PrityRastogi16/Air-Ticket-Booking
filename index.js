const express = require("express");
const {connection} = require("./db")
const app = express()
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Working fine")
})

app.listen("2001",async(req,res)=>{
    try{
        await connection
        console.log("Connected to DB")
        console.log("Server is runningon port 2001")
    }
    catch(err){
        res.send(err);
    }
  
})