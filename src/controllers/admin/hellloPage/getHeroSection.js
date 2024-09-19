const HeroSection = require('../../../models/heroSection');

const getHeroSection = async (req, res) => {
  try {
    const heroSection = await HeroSection.find();
    console.log('Retrieved Basics:', heroSection);
    res.status(200).json(heroSection);
  } catch (err) {
    console.error('Error fetching HeroSection information:', err);
    res.status(500).json({ error: 'Failed to fetch HeroSection information' });
  }
};

module.exports = {
    getHeroSection,
};
