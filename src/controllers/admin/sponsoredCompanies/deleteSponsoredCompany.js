const SponsoredCompany = require('../../../models/sponsoredCompanies');

const deleteSponsoredCompany = async (req, res) => {
     
    try {
        const { imageId } = req.params;
    
        const company = await SponsoredCompany.findOne();
    
        if (!company) {
          return res.status(404).json({ error: 'Sponsored company not found' });
        }
    
        const imageIndex = company.images.findIndex(image => image._id.toString() === imageId);
    
        if (imageIndex === -1) {
          return res.status(404).json({ error: 'Image not found' });
        }
    
        company.images.splice(imageIndex, 1);
    
        await company.save();
    
        res.status(200).json({
          message: 'Image deleted successfully',
          company,
        });
      } catch (err) {
        console.error('Error deleting image:', err);
        res.status(500).json({ error: 'Failed to delete image' });
      }
};

module.exports = { deleteSponsoredCompany };
