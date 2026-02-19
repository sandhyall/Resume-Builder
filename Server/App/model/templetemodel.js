const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Template = mongoose.model("Template", TemplateSchema);

module.exports = { Template };
