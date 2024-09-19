const CompanyHeader = require("../../../../models/companyHeader");
const Basic = require("../../../../models/basic");

const updateCompanyHeader = async (req, res) => {
  try {
    const { punchline, about } = req.body;

    let companyHeader = await CompanyHeader.findOne();
    if (!companyHeader) {
      return res.status(404).json({ message: "CompanyHeader nicht gefunden" });
    }

    let basicInfo = await Basic.findOne();
    if (!basicInfo || !basicInfo.largeLogo) {
      return res
        .status(400)
        .json({ message: "Logo nicht in Basisinformationen gefunden" });
    }

    companyHeader.punchline = punchline || companyHeader.punchline;
    companyHeader.about = about || companyHeader.about;
    companyHeader.logo = basicInfo.largeLogo;

    await companyHeader.save();

    console.log("Update Successfully: ", companyHeader);

    res.status(200).json({
      message: "CompanyHeader erfolgreich aktualisiert",
      companyHeader,
    });
  } catch (err) {
    console.error("Error updating CompanyHeader:", err);
    res
      .status(500)
      .json({ message: "Failed to update CompanyHeader", error: err.message });
  }
};

module.exports = { updateCompanyHeader };
