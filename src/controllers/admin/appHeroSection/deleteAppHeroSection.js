const HeroSection = require('../../../models/appHeroSection');

const deleteAppHeroSection = async (req, res) => {
  try {
    const { id } = req.params;

    const heroSection = await HeroSection.findById(id);

    if (!heroSection) {
      return res.status(404).json({ error: 'Hero section not found' });
    }

    await HeroSection.deleteOne({ _id: id });

    res.status(200).json({
      message: 'Hero section deleted successfully',
    });
  } catch (err) {
    console.error('Error deleting hero section:', err);
    res.status(500).json({ error: 'Failed to delete hero section' });
  }
};

module.exports = { deleteAppHeroSection };
