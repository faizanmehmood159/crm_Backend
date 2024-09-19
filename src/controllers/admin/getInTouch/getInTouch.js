const sendEmail = require('../../../../config/sendEmail');

const getInTouch = async (req, res) => {
  try {
    const { name, phoneNo, email, message } = req.body;
    await sendEmail(email, name, phoneNo, message); 
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Error sending message.');
  }
};

module.exports = { getInTouch };
