const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { UserRoute } = require("./App/routes/web/userRoute");
const router = require("./App/routes/admin/adminRoute");
const TempleteRoute = require("./App/routes/admin/templeteRoute");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/user", UserRoute);
app.use("/admin",router)
app.use("/templete",TempleteRoute)

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
