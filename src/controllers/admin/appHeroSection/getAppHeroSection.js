const AppHeroSection = require('../../../models/appHeroSection');

const getAppHeroSection = async (req, res) => {
  try {
    const appHeroSection = await AppHeroSection.find();
    console.log('Retrieved App Hero Section:', appHeroSection);
    res.status(200).json(appHeroSection);
  } catch (err) {
    console.error('Error fetching AppHeroSection information:', err);
    res.status(500).json({ error: 'Failed to fetch AppHeroSection information' });
  }
};

module.exports = {
    getAppHeroSection,
};
