const {Template} = require("../../model/templetemodel");
const fs = require("fs");
const path = require("path");

const AddTemplateInsert = async (req, res) => {
  try {
    const { name, category, description } = req.body;

    const template = new Template({
      name,
      type: type.toLowerCase().trim(), 
      category,
      description,
      image: req.file ? req.file.filename : null,
    });

    const savedTemplate = await template.save();

    res.status(200).json({
      status: "success",
      msg: "Template added successfully",
      data: savedTemplate,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const AddTemplateList = async (req, res) => {
  try {
    const templates = await Template.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: "success",
      msg: "Templates fetched successfully",
      data: templates,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const getTemplateById = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({
        status: "error",
        msg: "Template not found",
      });
    }

    res.status(200).json({
      status: "success",
      msg: "Template fetched successfully",
      data: template,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const editTemplate = async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      type: req.body.type?.toLowerCase().trim(),
      category: req.body.category,
      description: req.body.description,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedTemplate = await Template.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true },
    );

    if (!updatedTemplate) {
      return res.status(404).json({
        status: "error",
        msg: "Template not found",
      });
    }

    res.status(200).json({
      status: "success",
      msg: "Template updated successfully",
      data: updatedTemplate,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

const deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findByIdAndDelete(req.params.id);

    if (!template) {
      return res.status(404).json({
        status: "error",
        msg: "Template not found",
      });
    }

    // If image exists, delete it from uploads folder
    if (template.image) {
      const imagePath = path.join("uploads", template.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.status(200).json({
      status: "success",
      msg: "Template deleted successfully",
      data: template,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      msg: err.message,
    });
  }
};

module.exports = {
  AddTemplateInsert,
  AddTemplateList,
  getTemplateById,
  editTemplate,
  deleteTemplate,
};
