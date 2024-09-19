const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false, // Make this optional if you want to allow images without a description
  },
});

const companyCooperationSchema = new mongoose.Schema({
  images: [imageSchema],
});

const CompanyCooperation = mongoose.model(
  "CompanyCooperation",
  companyCooperationSchema
);

module.exports = CompanyCooperation;
