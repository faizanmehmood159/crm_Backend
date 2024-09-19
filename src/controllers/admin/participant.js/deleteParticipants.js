const Participant = require('../../../models/Participant');

const deleteParticipant = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the participant by ID
    const participant = await Participant.findByIdAndDelete(id);

    if (!participant) {
      return res.status(404).send('Participant not found.');
    }


    res.status(200).send('Participant deleted successfully.');
  } catch (error) {
    console.error('Error deleting participant:', error.message);
    res.status(500).send('Error deleting participant.');
  }
};

module.exports = { deleteParticipant };
