const mongoose = require('mongoose');

const appHeroSectionSchema = new mongoose.Schema({
  productName: {
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

const AppHeroSection = mongoose.model('AppHeroSection', appHeroSectionSchema);

module.exports = AppHeroSection;
