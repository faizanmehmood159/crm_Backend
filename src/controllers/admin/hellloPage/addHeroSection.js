const HeroSection = require('../../../models/heroSection');
const Company = require('../../../models/basic');
const path = require('path');
require('dotenv').config();

const addHeroSection = async (req, res) => {
  try {
    const {description} = req.body;
    const companyInfo = await Company.findOne();

    if (!companyInfo) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const newHeroSection = new HeroSection({
      companyName: companyInfo.companyName,
      description: description,
      image: imagePath,
    });

    await newHeroSection.save();

    res.status(201).json({
      message: 'Hero section saved successfully',
      
      imageURL: imagePath,
    });
  } catch (err) {
    console.error('Error saving hero section:', err);
    res.status(500).json({ error: 'Failed to save hero section' });
  }
};

module.exports = { addHeroSection };
