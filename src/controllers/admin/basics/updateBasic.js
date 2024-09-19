const Basic = require("../../../models/basic");
const path = require("path");
require("dotenv").config();

const updateBasic = async (req, res) => {
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

    console.log("Request Body:", req.body);

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;

    let smallLogoPath = null;
    let largeLogoPath = null;

    if (req.files && req.files["smallLogo"]) {
      smallLogoPath = `${baseUrl}/uploads/${req.files["smallLogo"][0].filename}`;
      console.log("Small Logo Path:", smallLogoPath);
    }

    if (req.files && req.files["largeLogo"]) {
      largeLogoPath = `${baseUrl}/uploads/${req.files["largeLogo"][0].filename}`;
      console.log("Large Logo Path:", largeLogoPath);
    }

    let basicInfo = await Basic.findOne();

    if (!basicInfo) {
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

      await newBasic.save();

      console.log("New Basic Info:", newBasic);

      return res.status(201).json({
        message: "Basisinformationen erfolgreich aktualisiert",
        basicInfo: newBasic,
      });
    }

    if (smallLogoPath) {
      basicInfo.smallLogo = smallLogoPath;
      console.log("Updating Small Logo Path:", smallLogoPath);
    }

    if (largeLogoPath) {
      basicInfo.largeLogo = largeLogoPath;
      console.log("Updating Large Logo Path:", largeLogoPath);
    }

    if (socialMedia) {
      basicInfo.socialMedia =
        typeof socialMedia === "string" ? JSON.parse(socialMedia) : socialMedia;
      console.log("Updating Social Media:", basicInfo.socialMedia);
    }

    if (companyName) {
      basicInfo.companyName = companyName;
      console.log("Updating Company Name:", companyName);
    }

    if (companyPunchline) {
      basicInfo.companyPunchline = companyPunchline;
      console.log("Updating Company Punchline:", companyPunchline);
    }

    if (description) {
      basicInfo.description = description;
      console.log("Updating Description:", description);
    }

    if (address) {
      basicInfo.address = address;
      console.log("Updating Address:", address);
    }

    if (email) {
      basicInfo.email = email;
      console.log("Updating Email:", email);
    }

    if (phoneNumber) {
      basicInfo.phoneNumber = phoneNumber;
      console.log("Updating Phone Number:", phoneNumber);
    }

    if (whatsappNumber) {
      basicInfo.whatsappNumber = whatsappNumber;
      console.log("Updating Whatsapp Number:", whatsappNumber);
    }

    await basicInfo.save();

    console.log("Updated Basic Info:", basicInfo);

    res.status(200).json({
      message: "Basisinformationen erfolgreich aktualisiert",
      basicInfo,
    });
  } catch (err) {
    console.error("Error saving or updating basic information:", err);
    res
      .status(500)
      .json({ error: "Failed to save or update basic information" });
  }
};

module.exports = { updateBasic };
