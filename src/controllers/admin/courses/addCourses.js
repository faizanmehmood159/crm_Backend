const Courses = require('../../../models/courses');
const path = require('path');
require('dotenv').config();

const addCourses = async (req, res) => {
  try {
    const { heading, information } = req.body;

    if (!heading || !information) {
      return res.status(400).json({ error: 'heading and information are required' });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const newCourse = new Courses({
      heading: heading,
      information: information,
      image: imagePath,
    });

    await newCourse.save();

    res.status(201).json({
      message: 'Courses saved successfully',
      imageURL: imagePath,
    });
  } catch (err) {
    console.error('Error saving Courses:', err);
    res.status(500).json({ error: 'Failed to save Courses' });
  }
};

module.exports = { addCourses };
