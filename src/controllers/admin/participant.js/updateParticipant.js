const Participant = require('../../../models/Participant');
const sendEmail = require('../../../../config/sendEmailParticipant');

const updateParticipantStatus = (status) => {
  return async (req, res) => {
    try {
      const participantId = req.params.id;
      const participant = await Participant.findById(participantId);

      if (!participant) {
        return res.status(404).send('Participant not found.');
      }

      participant.status = status;
      await participant.save();

      const emailOptions = {
        to: participant.email,
        subject: status === 'accepted' ? 'Registration Accepted' : 'Registration Rejected',
        status 
      };

      await sendEmail(emailOptions);

      res.status(200).send(`Participant ${status} successfully.`);
    } catch (error) {
      console.error('Error updating participant status:', error.message);
      res.status(500).send('Error updating participant status.');
    }
  };
};

module.exports = { updateParticipantStatus };
