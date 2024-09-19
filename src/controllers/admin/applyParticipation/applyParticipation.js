const express = require('express');
const sendEmail = require('../../../../config/sendEmailForm');
const router = express.Router();

const applyParticipation = async (req, res) => {
  const formData = req.body;
  try {
    await sendEmail(formData);
    res.status(200).send('Form submitted successfully.');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Error submitting form.');
  }
};

module.exports = {applyParticipation}
