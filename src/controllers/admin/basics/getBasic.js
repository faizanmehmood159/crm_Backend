const Basic = require('../../../models/basic');

const getBasic = async (req, res) => {
  try {
    const basics = await Basic.findOne();
    console.log('Retrieved Basics:', basics);
    res.status(200).json(basics);
  } catch (err) {
    console.error('Error fetching basic information:', err);
    res.status(500).json({ error: 'Failed to fetch basic information' });
  }
};

module.exports = {
  getBasic,
};
