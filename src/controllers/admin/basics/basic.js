const Basic = require("../../../models/basic");
const path = require("path");
require("dotenv").config();

const saveBasic = async (req, res) => {
  try {
    const {
      socialMedia,
      companyName,
      companyPunchline,
      description,
      address,
      email,
      phoneNumber,
      whatsappNumber,
    } = req.body;

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;

    const smallLogoPath = req.files["smallLogo"]
      ? `${baseUrl}/uploads/${req.files["smallLogo"][0].filename}`
      : null;
    const largeLogoPath = req.files["largeLogo"]
      ? `${baseUrl}/uploads/${req.files["largeLogo"][0].filename}`
      : null;

    console.log("smallLogoPath:", smallLogoPath);
    console.log("largeLogoPath:", largeLogoPath);

    if (!smallLogoPath || !largeLogoPath) {
      return res.status(400).json({
        error: "Both smallLogo and largeLogo are required fields",
      });
    }

    let basicInfo = await Basic.findOne();

    if (basicInfo) {
      basicInfo.smallLogo = smallLogoPath;
      basicInfo.largeLogo = largeLogoPath;
      basicInfo.socialMedia =
        typeof socialMedia === "string" ? JSON.parse(socialMedia) : socialMedia;
      basicInfo.companyName = companyName;
      basicInfo.companyPunchline = companyPunchline;
      basicInfo.description = description;
      basicInfo.address = address;
      basicInfo.email = email;
      basicInfo.phoneNumber = phoneNumber;
      basicInfo.whatsappNumber = whatsappNumber;

      await basicInfo.save();

      console.log("Updated Basic Info:", basicInfo);

      res.status(200).json({
        message: "Basisinformationen erfolgreich aktualisiert",
      });
    } else {
      const newBasic = new Basic({
        smallLogo: smallLogoPath,
        largeLogo: largeLogoPath,
        socialMedia:
          typeof socialMedia === "string"
            ? JSON.parse(socialMedia)
            : socialMedia,
        companyPunchline,
        companyName,
        description,
        address,
        email,
        phoneNumber,
        whatsappNumber,
      });

      console.log("New Basic Info:", newBasic);

      await newBasic.save();

      res.status(201).json({
        message: "Basisinformationen erfolgreich aktualisiert",
      });
    }
  } catch (err) {
    console.error("Error saving or updating basic information:", err);
    res
      .status(500)
      .json({ error: "Failed to save or update basic information" });
  }
};

module.exports = { saveBasic };
