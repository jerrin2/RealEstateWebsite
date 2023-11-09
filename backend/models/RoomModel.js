const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  cover: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
