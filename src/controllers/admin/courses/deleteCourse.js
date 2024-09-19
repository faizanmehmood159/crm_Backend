const Courses = require('../../../models/courses');

const deleteCourses = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await Courses.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(200).json({
      message: 'Course deleted successfully',
      
    });
  } catch (err) {
    console.error('Error deleting course:', err);
    res.status(500).json({ error: 'Failed to delete course' });
  }
};

module.exports = { deleteCourses };
