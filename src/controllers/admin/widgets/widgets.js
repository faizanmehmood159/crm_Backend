const Widget = require('../../../models/widgets');
const path = require('path');
require('dotenv').config();


const addWidget = async (req, res) => {
  try {
    const { heading, punchline, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const newWidget = new Widget({
      heading: heading,
      punchline: punchline,
      description: description,
      image: imagePath,
    });

    await newWidget.save();
    console.log('Widget saved Successfully', newWidget);

    res.status(201).json({
      message: 'Widget saved successfully',
      widget: newWidget,
    });
  } catch (err) {
    console.error('Error saving Widget:', err);
    res.status(500).json({ error: 'Failed to save Widget' });
  }
};

module.exports = { addWidget };
