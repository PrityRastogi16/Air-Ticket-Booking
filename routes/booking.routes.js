const express = require("express");
const {BookingModel} = require("../models/booking.model");
const {auth} = require("../middleware/auth");
const bookingRouter = express.Router();

bookingRouter.post("/",auth,async(req,res)=>{
    try{
        const {flighId} = req.body;
        const booking = new BookingModel({
            user:req.body.userID,
            flight:flighId
        })
        await booking.save();
        res.status(201).json({msg:'booked!'})
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})



bookingRouter.get("/dashboard",auth, async(req,res)=>{
    try{
       const bookings = await BookingModel.find({user:req.body.userID}).populate('user flight');
       res.status(201).json({bookings});
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})

// Update
bookingRouter.put("/dashboard/:id",auth, async(req,res)=>{
    try{
      const {flightId} = req.body;
      const booking = await BookingModel.findByIdAndUpdate(req.params.id,{
        user:req.body.userID,
        fligh:flightId
      },
      {new:true});
      if(!booking){
        res.staus(404).json({msg:"Booking Not found"});
      }
      res.staus(404).json({msg:"Booking Upadte"});
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})


bookingRouter.delete("/dashboard/:id",auth, async(req,res)=>{
    try{
      const {flightId} = req.body;
      const booking = await BookingModel.findByIdAndDelete(req.params.id);
      if(!booking){
        res.staus(404).json({msg:"Booking Not found"});
      }
      res.staus(404).json({msg:"Booking Deleted"});
    }
    catch(err){
        console.log(err);
        res.status(401).send({msg:"Error:err"})
    }
})

module.exports={
    bookingRouter
}