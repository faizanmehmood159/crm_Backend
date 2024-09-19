const CEO = require('../../../../models/ceo');
const path = require('path');
require('dotenv').config();

const addCEOInfo = async (req, res) => {
  try {
    const {name, email, about} = req.body;

        const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;
    

    const newCEO = new CEO({
      name: name,
      email:email,
      about:about,
      image: imagePath,
    });

    await newCEO.save();

    res.status(201).json({
      message: 'CEO saved successfully',
    
      // imageURL: imagePath,
    });
  } catch (err) {
    console.error('Error saving CEO:', err);
    res.status(500).json({ error: 'Failed to save CEO' });
  }
};

module.exports = { addCEOInfo };
