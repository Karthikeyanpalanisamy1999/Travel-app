const mongoose = require("mongoose");

const addinternationalSchema = new mongoose.Schema({
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

const AddinternationalModel = mongoose.model("addinternational",addinternationalSchema);
module.exports = AddinternationalModel;