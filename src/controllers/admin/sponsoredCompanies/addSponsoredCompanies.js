const SponsoredCompany = require('../../../models/sponsoredCompanies');
require('dotenv').config();

const addSponsoredCompanies = async (req, res) => {
  try {
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePaths = req.files ? req.files.map(file => `${baseUrl}/uploads/${file.filename}`) : [];


    let company = await SponsoredCompany.findOne();

    if (!company) {
      company = new SponsoredCompany();
    }

    company.images.push(...imagePaths.map(imageUrl => ({ imageUrl })));

    await company.save();

    res.status(201).json({
      message: 'Images saved successfully',
      company,
    });
  } catch (err) {
    console.error('Error saving images:', err);
    res.status(500).json({ error: 'Failed to save images' });
  }
};

module.exports = { addSponsoredCompanies };
