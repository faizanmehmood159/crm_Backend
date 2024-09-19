const Training = require('../../../models/training');

const getTraining = async (req, res) => {
  try {
    const training = await Training.find();
    console.log('Retrieved Quote:', training);
    res.status(200).json(training);
  } catch (err) {
    console.error('Error fetching Training information:', err);
    res.status(500).json({ error: 'Failed to fetch Training information' });
  }
};

module.exports = {getTraining};
