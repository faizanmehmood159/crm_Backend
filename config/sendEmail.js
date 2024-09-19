require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, name, phoneNo, message) => {
  const msg = {
    to: 'faizanmehmood159@gmail.com', 
    from: 'possbly@comtechradix.com', 
    subject: 'New Message from Get In Touch Form',
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Message from Get In Touch Form</h2>
      <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
        <p style="margin: 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 0;"><strong>Phone Number:</strong> ${phoneNo}</p>
        <p style="margin: 0;"><strong>Message:</strong></p>
        <p style="padding-left: 20px;">${message}</p>
      </div>
      <p style="color: #666; font-size: 12px;">This email was sent via the CRM Company Get In Touch form.</p>
    </div>
  `,
  };

  try {
    await sgMail.send(msg);
    console.log('Message sent');
  } catch (error) {
    console.error('Error sending message:', error);
    if (error.response) {
      console.error('Error response body:', error.response.body);
    }
  }
};

module.exports = sendEmail;
