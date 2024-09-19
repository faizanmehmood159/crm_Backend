const CEO = require("../../../../models/ceo");
const path = require("path");
require('dotenv').config();

const updateCEOInfo = async (req, res) => {
  try {
    const { name, email, about } = req.body;

    let ceo = await CEO.findOne();
    if (!ceo) {
      return res.status(404).json({ message: "CEO not found" });
    }

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;

    const imagePath =
      req.files && req.files["image"]
        ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
        : ceo.image;

    ceo.name = name || ceo.name;
    ceo.email = email || ceo.email;
    ceo.about = about || ceo.about;
    ceo.image = imagePath;

    await ceo.save();

    console.log("Update Successfully: ", ceo);

    res.status(200).json({
      message: "CEO updated successfully",
      ceo,
    });
  } catch (err) {
    console.error("Error updating CEO:", err);
    res.status(500).json({ error: "Failed to update CEO" });
  }
};

module.exports = { updateCEOInfo };
