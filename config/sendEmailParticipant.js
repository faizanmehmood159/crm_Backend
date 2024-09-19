require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailParticipant = async (options) => {
  const { to, subject, status } = options;

  const msg = {
    to,
    from: 'possbly@comtechradix.com',
    subject,
    html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          h1 {
            color: #555;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${status === 'accepted' ? 'Registration Accepted' : 'Registration Rejected'}</h1>
          <p>Dear Participant,</p>
          <p>Your registration has been ${status}. Thank you for your interest.</p>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Message sent to', to);
  } catch (error) {
    console.error('Error sending message to', to, ':', error);
    if (error.response) {
      console.error('Error response body:', error.response.body);
    }
  }
};

module.exports = sendEmailParticipant;
