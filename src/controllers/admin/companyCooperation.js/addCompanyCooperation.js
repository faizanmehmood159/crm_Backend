const CompanyCooperation = require("../../../models/companyCooperation");
require("dotenv").config();

const addCompanyCooperation = async (req, res) => {
  try {
    console.log("Received description:", req.body.description);

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;

    const imagePaths = req.files
      ? req.files.map((file) => `${baseUrl}/uploads/${file.filename}`)
      : [];

    let company = await CompanyCooperation.findOne();

    if (!company) {
      company = new CompanyCooperation();
    }

    // Combine images and descriptions into objects
    const imagesWithDescriptions = imagePaths.map((imageUrl, index) => ({
      imageUrl,
      description: req.body.description, // Use the received description
    }));

    company.images.push(...imagesWithDescriptions);

    await company.save();

    res.status(201).json({
      message: "Images and descriptions saved successfully",
      company,
    });
  } catch (err) {
    console.error("Error saving images and descriptions:", err);
    res.status(500).json({ error: "Failed to save images and descriptions" });
  }
};

module.exports = { addCompanyCooperation };
