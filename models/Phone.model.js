const { Schema, model } = require("mongoose");

const phoneSchema = new Schema({
  id: {
    type: Number,
    required: [true],
    unique: true,
  },
  name: {
    type: String,
    required: [true],
  },
  manufacturer: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  color: {
    type: String,
    default: "N/A",
  },
  price: {
    type: Number,
    required: true,
  },
  imageFileName: {
    type: String,
    required: true,
  },
  screen: {
    type: String,
    default: "N/A",
  },
  processor: {
    type: String,
    required: [true],
  },
  ram: {
    type: Number,
    required: true,
  },
});

const Phone = model("Phone", phoneSchema);
module.exports = Phone;
