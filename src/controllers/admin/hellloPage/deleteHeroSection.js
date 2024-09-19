const HeroSection = require('../../../models/heroSection');

const deleteHeroSection = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedHeroSection = await HeroSection.findByIdAndDelete(id);

    if (!deletedHeroSection) {
      return res.status(404).json({ error: 'Hero section not found' });
    }

    res.status(200).json({
      message: 'Hero section deleted successfully',
      heroSection: deletedHeroSection,
    });
  } catch (err) {
    console.error('Error deleting hero section:', err);
    res.status(500).json({ error: 'Failed to delete hero section' });
  }
};

module.exports = { deleteHeroSection };
