const TrainingAndCoachig = require("../../../models/trainingAndCoachig");

const deleteTrainingAndCoaching = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID required" });
    }

    const deletedTrainingAndCoaching = await TrainingAndCoachig.findByIdAndDelete(id);

    if (!deletedTrainingAndCoaching) {
      return res.status(404).json({ error: "Training and Coaching not found" });
    }

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting :", err);
    res.status(500).json({ error: "Failed to delete" });
  }
};

module.exports = {deleteTrainingAndCoaching};
