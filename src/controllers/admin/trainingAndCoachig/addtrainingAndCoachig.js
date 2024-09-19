const TrainingAndCoachig = require("../../../models/trainingAndCoachig");
const path = require("path");
require('dotenv').config();

const addtrainingAndCoachig = async (req, res) => {
  try {
    const { brief, description, punchLine } = req.body;
require('dotenv').config();
    if (!brief || !description || !punchLine) {
      return res.status(400).json({ error: "Data required" });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath =
      req.files && req.files["image"]
        ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
        : null;

    const newtrainingAndCoachig = new TrainingAndCoachig({
      brief: brief,
      description: description,
      punchLine: punchLine,
      image: imagePath,
    });

    await newtrainingAndCoachig.save();

    res.status(201).json({
      message: "Saved successfully",
    //   imageURL: imagePath,
    });
  } catch (err) {
    console.error("Error saving :", err);
    res.status(500).json({ error: "Failed to save" });
  }
};

module.exports = { addtrainingAndCoachig };
