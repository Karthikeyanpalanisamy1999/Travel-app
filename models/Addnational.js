const mongoose = require("mongoose");

const addnationalSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      image: {
       type: Buffer,
       required: true,
     },
})

const AddnationalModel = mongoose.model("addnational",addnationalSchema);
module.exports = AddnationalModel;