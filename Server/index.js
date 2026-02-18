const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { UserRoute } = require("./App/routes/web/userRoute");
const router = require("./App/routes/admin/adminRoute");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", UserRoute);
app.use("/admin",router)

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
});
