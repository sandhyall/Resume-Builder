const express = require("express");
const { adminLogin } = require("../../controller/admin/adminController");

const router = express.Router();

router.post("/login", adminLogin);

module.exports = router;
