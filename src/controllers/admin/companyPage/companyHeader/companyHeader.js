const express = require("express");
const router = express.Router();
const CompanyHeader = require("../../../../models/companyHeader");
const Basic = require("../../../../models/basic");

const companyheader = async (req, res) => {
  try {
    const { punchline, about } = req.body;

    if (!punchline || !about) {
      return res
        .status(400)
        .json({ message: "Punchline and about are required fields" });
    }

    let basicInfo = await Basic.findOne();
    if (!basicInfo || !basicInfo.largeLogo) {
      return res
        .status(400)
        .json({ message: "Logo nicht in Basisinformationen gefunden" });
    }

    const newCompanyHeader = new CompanyHeader({
      logo: basicInfo.largeLogo,
      punchline,
      about,
    });

    await newCompanyHeader.save();

    res.status(201).json({
      message: "CompanyHeader created successfully",
      companyHeader: newCompanyHeader,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to create CompanyHeader", error: err.message });
  }
};

module.exports = { companyheader };
