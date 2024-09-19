
const CEO = require('../../../../models/ceo');

const getCEOInfo = async (req, res) =>{
    try{
        const ceo = await CEO.findOne();
        console.log('Retrieved CEO:', ceo);
        res.status(200).json(ceo);
    }catch(err){
        console.error('Error fetching CEO information:', err);
        res.status(500).json({ error: 'Failed to fetch CEO information' });
      } 
    
}
module.exports = {getCEOInfo};