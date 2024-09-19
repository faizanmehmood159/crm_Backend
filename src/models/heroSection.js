const mongoose = require('mongoose');

const heroSectionSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, );

const HeroSection = mongoose.model('HeroSection', heroSectionSchema);

module.exports = HeroSection;
