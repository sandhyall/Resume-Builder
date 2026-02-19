require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../Server/App/model/adminmodel");

const createAdmin = async () => {
  const email = "sandhyadahal864@gmail.com";
  const password = "admin123";

  try {
    await mongoose.connect(process.env.DB);
    console.log("MongoDB connected");

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      console.log("Admin already exists");
      return mongoose.disconnect();
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await Admin.create({ email, password: hashPassword });
    console.log("Admin created successfully");

    await mongoose.disconnect();
  } catch (err) {
    console.error("Error creating admin:", err.message);
    await mongoose.disconnect();
  }
};

createAdmin();
