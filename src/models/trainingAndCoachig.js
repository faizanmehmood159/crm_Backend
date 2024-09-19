const mongoose = require("mongoose");

const trainingAndCoachigSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  brief: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  punchLine: {
    type: String,
    require: true,
  },
});

const TrainingAndCoachig = mongoose.model("TrainingAndCoachig", trainingAndCoachigSchema);

module.exports = TrainingAndCoachig;
