const Participant = require('../../../models/Participant');
const sendEmail = require('../../../../config/sendEmailForm');

const saveParticipant = async (req, res) => {
  try {
    const formData = req.body;


    const requiredFields = [
      'salutation', 'title', 'firstName', 'lastName', 'dateOfBirth', 'addressType',
      'addressLine1', 'addressLine2', 'street', 'postalCode', 'city', 'state',
      'phoneNumber', 'email', 'repeatEmail', 'paymentMethod', 'remarks'
    ];

    
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      return res.status(400).send(`  ${emptyFields.join(', ')} Feild is Required `);
    }

    if (formData.email !== formData.repeatEmail) {
      return res.status(400).send('Emails do not match.');
    }

    const participant = new Participant(formData);
    await participant.save();

  
    await sendEmail({
      ...formData,
      status: 'pending',
      to: 'faizanmehmood159@gmail.com', 
      subject: 'New Participant Registration'
    });

  
    await sendEmail({
      ...formData,
      status: 'pending',
      to: formData.email, 
      subject: 'Registration Confirmation'
    });

    res.status(200).send('Participant registered successfully.');
  } catch (error) {
    console.error('Error registering participant:', error.message);
    res.status(500).send('Error registering participant.');
  }
};

module.exports = { saveParticipant };
