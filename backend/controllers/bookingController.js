const Booking = require("../models/bookingModel");

exports.createBooking = async (req, res) => {
  try {
    await Booking.create(req.body);
    res.json({ success: true, message: "Booking Saved Successfully!" });
  } catch (err) {
    console.log("Booking Error:", err.message);
    res.json({ success: false, message: "Error Saving Booking" });
  }
};
