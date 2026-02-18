const express = require("express");
const {
  Registerpost,
  Loginpost,
} = require("../../controller/web/usercontroller");

const UserRoute = express.Router();

UserRoute.post("/register", Registerpost);
UserRoute.post("/login", Loginpost);

module.exports = { UserRoute };
