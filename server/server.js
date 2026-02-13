const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sendOTP } = require("./src/controllers/otp.controller");
const { connectDB } = require("./src/config/db");
require("dotenv").config();
const adminRoutes = require("./src/routes/admin.routes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();

// Routes
app.use("/api/admins", adminRoutes);
app.use("/api/otp", sendOTP);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
