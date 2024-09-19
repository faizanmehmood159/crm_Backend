const mongoose = require("mongoose");

const widgetSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Widget = mongoose.model("Widget", widgetSchema);

module.exports = Widget;
