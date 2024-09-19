const Quote = require('../../../models/quote');

const getQuote = async (req, res) => {
  try {
    const quote = await Quote.find();
    console.log('Retrieved Quote:', quote);
    res.status(200).json(quote);
  } catch (err) {
    console.error('Error fetching quote information:', err);
    res.status(500).json({ error: 'Failed to fetch quote information' });
  }
};

module.exports = {
  getQuote,
};
