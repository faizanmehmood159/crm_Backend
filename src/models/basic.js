const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
}, { _id: false });

const companySchema = new mongoose.Schema({
  smallLogo: {
    type: String,
    required: true,
  },
  largeLogo: {
    type: String,
    required: true,
  },
  socialMedia: {
    type: [socialMediaSchema],
    required: true,
  },
  companyName:{
    type: String,
    require: true
  },
  companyPunchline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
