const TrainingAndCoachig = require("../../../models/trainingAndCoachig");
const path = require("path");
require('dotenv').config();

const updateTrainingAndCoachig = async (req, res) => {
  try {
    const { id } = req.params;
    const { brief, description, punchLine } = req.body;

    const trainingAndCoachig = await TrainingAndCoachig.findById(id);

    if (!trainingAndCoachig) {
      return res.status(404).json({ error: "Data not found" });
    }

    let imagePath = trainingAndCoachig.image; // Keep the existing image path

    if (req.files && req.files["image"]) { // Check if a new image is uploaded
      const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
      imagePath = `${baseUrl}/uploads/${req.files["image"][0].filename}`; // Update image path
    }

    // Update other fields
    trainingAndCoachig.brief = brief || trainingAndCoachig.brief;
    trainingAndCoachig.description = description || trainingAndCoachig.description;
    trainingAndCoachig.punchLine = punchLine || trainingAndCoachig.punchLine;
    trainingAndCoachig.image = imagePath; // Set the new or existing image path

    await trainingAndCoachig.save();

    res.status(200).json({
      message: "Updated successfully",
      trainingAndCoachig,
    });
  } catch (err) {
    console.error("Error updating:", err);
    res.status(500).json({ error: "Failed to update" });
  }
};

module.exports = { updateTrainingAndCoachig };
