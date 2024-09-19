require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailForm = async (options) => {
  const { salutation, title, firstName, lastName, dateOfBirth, addressType, addressLine1, addressLine2, street, postalCode, city, state, phoneNumber, email, repeatEmail, paymentMethod, remarks, to, subject } = options;

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
          h1, h2, h3 {
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
          .section {
            margin-bottom: 20px;
          }
          .section p {
            margin: 5px 0;
          }
          .section p strong {
            display: inline-block;
            width: 150px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${subject}</h1>
          <div class="section">
            <h2>Participant Data</h2>
            <h3>Mandatory Fields</h3>
            <p><strong>Salutation:</strong> ${salutation}</p>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          </div>
          <div class="section">
            <h2>Address</h2>
            <p><strong>Address Type:</strong> ${addressType}</p>
            <p><strong>Address Line 1:</strong> ${addressLine1}</p>
            <p><strong>Address Line 2:</strong> ${addressLine2}</p>
            <p><strong>Street:</strong> ${street}</p>
            <p><strong>City:</strong> ${city}  ${postalCode}</p>
            <p><strong>State:</strong> ${state}</p>
          </div>
          <div class="section">
            <h2>Contact</h2>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Repeat Email:</strong> ${repeatEmail}</p>
          </div>
          <div class="section">
            <h2>Payment Details</h2>
            <p><strong>Payment Method:</strong> ${paymentMethod}</p>
          </div>
          <div class="section">
            <h2>Further Information</h2>
            <p><strong>Remarks:</strong> ${remarks}</p>
          </div>
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

module.exports = sendEmailForm;
