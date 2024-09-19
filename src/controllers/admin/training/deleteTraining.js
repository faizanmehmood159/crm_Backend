const Training = require('../../../models/training');

const deleteTraining = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTraining = await Training.findByIdAndDelete(id);

    if (!deletedTraining) {
      return res.status(404).json({ error: 'Training not found' });
    }

    res.json({ message: 'Training deleted successfully', deletedTraining });
  } catch (err) {
    console.error('Error deleting Training:', err);
    res.status(500).json({ error: 'Failed to delete Training' });
  }
};

module.exports = { deleteTraining };
