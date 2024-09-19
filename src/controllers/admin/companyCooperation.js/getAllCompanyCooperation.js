const CompanyCooperation = require('../../../models/companyCooperation'); 

const getAllCompanyCooperation = async (req, res) => {
  try {

    const sponsoredCompanies = await CompanyCooperation.findOne();

    res.status(200).json(sponsoredCompanies);
  } catch (err) {
    console.error('Error fetching sponsored companies:', err);
    res.status(500).json({ error: 'Failed to fetch sponsored companies' });
  }
};

module.exports = { getAllCompanyCooperation };
