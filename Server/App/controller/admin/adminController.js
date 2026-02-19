const Admin = require("../../model/adminmodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await Admin.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Email does not exist" });

    const isMatch = await bcrypt.compare(String(password), user.password);
    if (!isMatch) return res.status(400).json({ msg: "Password does not match" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password: pwd, ...userWithoutPassword } = user._doc;

    return res.status(200).json({ msg: "Login successful", token, user: userWithoutPassword });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { adminLogin };
