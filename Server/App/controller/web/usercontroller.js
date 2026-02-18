const { UserModel } = require("../../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Registerpost = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).send({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    res.status(201).send({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};

const Loginpost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).send({ msg: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send({ msg: "Password does not match" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).send({
      msg: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};

module.exports = { Registerpost, Loginpost };
