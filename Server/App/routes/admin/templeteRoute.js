const express = require("express");
const {
  AddTemplateInsert,
  AddTemplateList,
  getTemplateById,
  editTemplate,
  deleteTemplate,
} = require("../../controller/admin/templeteController");
const upload = require("../../middleware/multer");

const TempleteRoute = express.Router();

TempleteRoute.post("/insert", upload.single("image"),AddTemplateInsert);

TempleteRoute.get("/list", AddTemplateList);

TempleteRoute.get("/:id", getTemplateById);

TempleteRoute.put("/:id",upload.single("image"), editTemplate);

TempleteRoute.delete("/:id", deleteTemplate);

module.exports = TempleteRoute;
