const Training = require('../../../models/training'); 

const addTraining = async (req, res) => {
  try {
    const { heading, subheading, steps, paragraphs, participation } = req.body;

    const newTraining = new Training({
      heading,
      subheading,
      steps,
      paragraphs,
      participation,
    });

    await newTraining.save();

    console.log('Save Training Sucessfully: ', newTraining)

    res.status(201).json({
      message: 'Training created successfully',
      training: newTraining,
    });
  } catch (err) {
    console.error('Error creating Training:', err);
    res.status(500).json({ error: 'Failed to create Training' });
  }
};

module.exports ={addTraining}