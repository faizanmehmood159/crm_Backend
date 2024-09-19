const mongoose = require("mongoose");
const { Schema } = mongoose; 

const StepSchema = new Schema({
  stepHeading: {
    type: String,
    required: true,
  },
  points: [
    {
      type: String,
      required: true,
    },
  ],
},{ _id: false });

const ParticipationSchema = new Schema({
  deadlines: [
    {
      type: Date,
      required: true,
    },
  ],
  address: {
    type: String,
    required: true,
  },
  costPerParticipant: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  taxValue: {
    type: Number,
    required: true,
  },
  costWithTax:{
      type:Number,
      required:true,
  },
  maxParticipants: {
    type: Number,
    required: true,
  },
  minParticipants: {
    type: Number,
    required: true,
  },
  availablePlaces: {
    type: Number,
    required: true,
  },
  coach: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
},{ _id: false });

const trainingSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  steps: [StepSchema],
  paragraphs: [
    {
      type: String,
      required: true,
    },
  ],
  participation: [ParticipationSchema],
});

module.exports = mongoose.model("Training", trainingSchema);
