const Courses = require("../../../models/courses");
require('dotenv').config();

const updateCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, information } = req.body;

    const course = await Courses.findById(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : course.image;


    course.heading = heading || course.heading;
    course.information = information || course.information;
    course.image = imagePath;

    await course.save();

    res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (err) {
    console.error("Error updating course:", err);
    res.status(500).json({ error: "Failed to update course" });
  }
};

module.exports = { updateCourses };
