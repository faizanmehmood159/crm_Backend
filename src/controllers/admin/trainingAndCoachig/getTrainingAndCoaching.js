const TrainingAndCoachig = require('../../../models/trainingAndCoachig');

const getTrainingAndCoachig = async (req, res) => {
  try {
    const trainingAndCoachig = await TrainingAndCoachig.findOne();
    res.status(200).json(trainingAndCoachig);
  } catch (err) {
    console.error('Error fetching Data:', err);
    res.status(500).json({ error: 'Failed to fetch Data' });
  }
};

module.exports = { getTrainingAndCoachig };
