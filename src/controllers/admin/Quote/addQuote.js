const Quote = require('../../../models/quote');

const addQuote = async (req, res) => {
  try {
    const { speaker, quote } = req.body;

    const newQuote = new Quote({
      speaker,
      quote
    });

    await newQuote.save();
    res.status(201).json({ message: 'Quote created successfully', Quote: newQuote });
  } catch (err) {
    console.error('Error creating speaker quote:', err);
    res.status(500).json({ error: 'Failed to create speaker quote' });
  }
};

module.exports = addQuote;
