
const CompanyHeader = require('../../../../models/companyHeader');

const getCompanyHeader = async (req, res) =>{
    try{
        const companyHeader = await CompanyHeader.findOne();
        console.log('Retrieved Company Header:', companyHeader);
        res.status(200).json(companyHeader);
    }catch(err){
        console.error('Error fetching AppHeroSection information:', err);
        res.status(500).json({ error: 'Failed to fetch AppHeroSection information' });
      } 
    
}
module.exports = {getCompanyHeader};