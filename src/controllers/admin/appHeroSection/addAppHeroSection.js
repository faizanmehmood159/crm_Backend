const HeroSection = require("../../../models/appHeroSection");
const Product = require("../../../models/product");
const path = require("path");
require("dotenv").config();

const addAppHeroSection = async (req, res) => {
  try {
    const { description } = req.body;
    const productInfo = await Product.findOne();

    if (!productInfo) {
      return res.status(404).json({ error: "Product not found" });
    }
    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;

    const imagePath =
      req.files && req.files["image"]
        ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
        : null;

    const newHeroSection = new HeroSection({
      productName: productInfo.productName,
      description: description,
      image: imagePath,
    });

    await newHeroSection.save();

    res.status(201).json({
      message: "Hero section saved successfully",
      // imageURL: imagePath,
    });
  } catch (err) {
    console.error("Error saving hero section:", err);
    res.status(500).json({ error: "Failed to save hero section" });
  }
};

module.exports = { addAppHeroSection };
