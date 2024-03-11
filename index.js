const express = require("express");
const {connection} = require("./db")
const {userRouter} = require("./routes/user.routes");
const {flightRouter} = require("./routes/flight.routes");
const {bookingRouter} = require("./routes/booking.routes");
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require("swagger-jsdoc");
const app = express()
app.use(express.json());

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Flight Booking System",
            version:"1.0.0"
        },
        servers:[
            {
                url:"http://localhost:2001"
            }
        ]
    },
    apis:["./routes/*.js"]
}
const openApiSpec = swaggerJsDoc(options);
app.use('/apidocs', swaggerUI.serve, swaggerUI.setup(openApiSpec))
app.get("/",(req,res)=>{
    res.send("Working fine")
})
app.use("/user", userRouter);
app.use("/flight", flightRouter);
app.use("/booking", bookingRouter);
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