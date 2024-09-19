const Training = require('../../../models/training');

const updateTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, subheading, steps, paragraphs, participation } = req.body;

    let training = await Training.findById(id);

    if (!training) {
      return res.status(404).json({ message: 'Training not found' });
    }

    if (heading) training.heading = heading;
    if (subheading) training.subheading = subheading;
    if (steps) training.steps = steps;
    if (paragraphs) training.paragraphs = paragraphs;
    if (participation) training.participation = participation;

    await training.save();

    console.log('Training updated successfully:', training);

    res.status(200).json({
      message: 'Training updated successfully',
      training,
    });
  } catch (err) {
    console.error('Error updating Training:', err);
    res.status(500).json({ error: 'Failed to update Training' });
  }
};

module.exports = { updateTraining };
