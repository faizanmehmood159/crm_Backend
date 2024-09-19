const Courses = require('../../../models/courses');

const getCourses = async (req, res) => {
  try {
    const courses = await Courses.find();
    console.log('Retrieved App Hero Section:', courses);
    res.status(200).json(courses);
  } catch (err) {
    console.error('Error fetching Courses:', err);
    res.status(500).json({ error: 'Failed to fetch Courses' });
  }
};

module.exports = {getCourses};
