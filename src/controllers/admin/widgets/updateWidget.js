const Widget = require("../../../models/widgets");
require("dotenv").config();

const updateWidget = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, punchline, description } = req.body;

    const widget = await Widget.findById(id);

    if (!widget) {
      return res.status(404).json({ error: "Widget not found" });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files["image"]
      ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
      : null;

    widget.heading = heading || widget.heading;
    widget.punchline = punchline || widget.punchline;
    widget.description = description || widget.description;
    widget.image = imagePath;

    await widget.save();
    console.log("Update Sucessfully: ", widget);
    res.status(200).json({
      message: "Widget updated successfully",
      widget,
    });
  } catch (err) {
    console.error("Error updating widget:", err);
    res.status(500).json({ error: "Failed to update widget" });
  }
};

module.exports = { updateWidget };
