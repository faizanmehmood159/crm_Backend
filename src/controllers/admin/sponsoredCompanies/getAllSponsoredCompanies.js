const SponsoredCompany = require('../../../models/sponsoredCompanies'); 

const getAllSponsoredCompanies = async (req, res) => {
  try {

    const sponsoredCompanies = await SponsoredCompany.findOne();

    res.status(200).json(sponsoredCompanies);
  } catch (err) {
    console.error('Error fetching sponsored companies:', err);
    res.status(500).json({ error: 'Failed to fetch sponsored companies' });
  }
};

module.exports = { getAllSponsoredCompanies };
