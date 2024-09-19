const Employees = require("../../../../models/employees");


const getEmployees = async (req, res) =>{
    try{
        const employees = await Employees.find();
        console.log('Retrieved Employees:', employees);
        res.status(200).json(employees);
    }catch(err){
        console.error('Error fetching Employees information:', err);
        res.status(500).json({ error: 'Failed to fetch Employees information' });
      } 
    
}
module.exports = {getEmployees};