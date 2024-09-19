const HeroSection = require("../../../models/appHeroSection");
const path = require("path");
require("dotenv").config();

const updateAppHeroSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const heroSection = await HeroSection.findById(id);

    if (!heroSection) {
      return res.status(404).json({ error: "Hero section not found" });
    }

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;

    const imagePath = req.files["image"]
      ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
      : heroSection.image;

    heroSection.description = description || heroSection.description;
    heroSection.image = imagePath;

    await heroSection.save();

    res.status(200).json({
      message: "Hero section updated successfully",
      heroSection,
    });
  } catch (err) {
    console.error("Error updating hero section:", err);
    res.status(500).json({ error: "Failed to update hero section" });
  }
};

module.exports = { updateAppHeroSection };
