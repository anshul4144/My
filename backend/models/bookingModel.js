const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  service: String,
  name: String,
  phone: Number,
  address: String,
  date: Date,
});

module.exports = mongoose.model("Booking", bookingSchema);
