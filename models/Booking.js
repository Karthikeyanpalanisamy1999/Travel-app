const mongoose = require("mongoose");



const bookingSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    age:Number,
    date:String,
    locations:String,
    place:String,
    amount:String
})

const BookingModel = mongoose.model("bookinges",bookingSchema);
module.exports = BookingModel;