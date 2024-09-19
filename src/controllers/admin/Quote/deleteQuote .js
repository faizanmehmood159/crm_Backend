const Quote = require('../../../models/quote');

const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuote = await Quote.findByIdAndDelete(id);

    if (!deletedQuote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    res.status(200).json({ message: 'Quote deleted successfully', Quote: deletedQuote });
  } catch (err) {
    console.error('Error deleting speaker quote:', err);
    res.status(500).json({ error: 'Failed to delete speaker quote' });
  }
};

module.exports = {deleteQuote};
