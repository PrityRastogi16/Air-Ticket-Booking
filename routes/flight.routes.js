const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {FlightModel} = require("../models/flight.model");
const {auth} = require("../middleware/auth");
const flightRouter = express.Router();

// Registration
flightRouter.post("/add", async(req,res)=>{
    const {airline, flightNo, departure, arrival,departureTime,arrivalTime, seats, price} = req.body;
    try{
            const flight = new FlightModel({airline, flightNo, departure, arrival,departureTime,arrivalTime, seats, price});
            await flight.save();
            res.status(201).json({msg:"Flight Added Successfully", flight})
        }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})

// Get All flight
flightRouter.get("/",async(req,res)=>{
    try{
       const flights = await FlightModel.find();
       res.status(201).json(flights);
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})

// Get flight by id
flightRouter.get('/:id', async(req,res)=>{
    try{
        const flight = await FlightModel.findById(req.params.id);
        if(!flight){
            res.status(401).send({msg:"Flight nt found"})
        }
        res.status(201).json(flight);
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})

// Delete flight
flightRouter.delete("/delete/:id",auth, async(req,res)=>{
    try{
      const flight = await FlightModel.findByIdAndDelete(req.params,id);
      if(!flight){
        res.status(401).send({msg:"Flight nt found"})
    }
    res.status(201).json({msg:"Flight Deleted"});
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})

module.exports={
    flightRouter
}