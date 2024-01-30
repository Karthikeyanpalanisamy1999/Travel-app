const mongoose = require('mongoose');

const addtamilnaduSchema = new mongoose.Schema({
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
});

const AddtamilnaduModel = mongoose.model('Addtamilnadu', addtamilnaduSchema);

module.exports = AddtamilnaduModel;
