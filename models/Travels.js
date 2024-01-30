const mongoose = require("mongoose");

const travelsSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    email:String,
    password:String,
    confirmpassword:String
})


const TravelsModel = mongoose.model("travels",travelsSchema);
module.exports = TravelsModel;
