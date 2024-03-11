const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    flight:{type:mongoose.Schema.Types.ObjectId, ref:'flight'}
})
const BookingModel = mongoose.model('booking', bookingSchema);

module.exports={
    BookingModel
}