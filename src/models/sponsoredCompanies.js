const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  }
},);

const sponsoredCompanySchema = new mongoose.Schema({
  images: [imageSchema]
});

const SponsoredCompany = mongoose.model('SponsoredCompany', sponsoredCompanySchema);

module.exports = SponsoredCompany;
