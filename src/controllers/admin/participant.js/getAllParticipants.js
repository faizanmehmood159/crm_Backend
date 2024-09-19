const Participant = require('../../../models/Participant');

const getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find().exec();
    res.status(200).json(participants);
  } catch (error) {
    console.error('Error fetching participants:', error.message);
    res.status(500).send('Error fetching participants.');
  }
};

module.exports = { getAllParticipants };
