const Quote = require('../../../models/quote');

const updateQuote = async (req, res) => {
  const { id } = req.params; 
  const { speaker, quote } = req.body;

  try {
    const updatedQuote = await Quote.findByIdAndUpdate(id, { speaker, quote }, { new: true });

    if (!updatedQuote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.status(200).json({ message: 'Quote updated successfully', quote: updatedQuote });
  } catch (err) {
    console.error('Error updating quote:', err);
    res.status(500).json({ error: 'Failed to update quote' });
  }
};

module.exports = {updateQuote};
