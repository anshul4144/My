const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect DB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
const bookingRoutes = require("./routes/bookingRoutes");
const aiRoutes = require("./routes/aiRoutes");// ⬅ NEW ADD

app.use("/api", bookingRoutes);
app.use("/api/ai", aiRoutes); // ⬅ ADD HERE

// Test Route
app.get("/", (req, res) => {
  res.send("FixIt Backend Running ✔ (Booking + AI Ready)");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
