const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true
  },
});

const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;
