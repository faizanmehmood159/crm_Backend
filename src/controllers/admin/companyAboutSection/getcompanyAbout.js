const Basic = require('../../../models/basic');

const getcompanyAbout = async (req, res) => {
  
    try {
        const basicInfo = await Basic.findOne({}, 'companyName companyPunchline description');
    
        if (!basicInfo) {
          return res.status(404).json({ error: 'Basic information not found' });
        }
    
        res.status(200).json({
          companyName: basicInfo.companyName,
          companyPunchline: basicInfo.companyPunchline,
          description: basicInfo.description,
        });
      } catch (err) {
        console.error('Error retrieving company details:', err);
        res.status(500).json({ error: 'Failed to retrieve company details' });
      }
};

module.exports = {
    getcompanyAbout,
};
