const Employees = require('../../../../models/employees');
require('dotenv').config();

const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, about } = req.body;

    
    const employee = await Employees.findById(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : employee.image;

    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.about = about || employee.about;
    employee.image = imagePath;

    await employee.save();
    console.log('Employee updated successfully:', employee);

    res.status(200).json({
      message: 'Employee updated successfully',
      employee,
    });
  } catch (err) {
    console.error('Error updating employee:', err);
    res.status(500).json({ error: 'Failed to update employee' });
  }
};

module.exports = { updateEmployees };
