const Employees = require('../../../../models/employees');

const deleteEmployees = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmployee = await Employees.findByIdAndDelete(id);

    if (!deletedEmployee) {
      console.log('Employee not found');
      return res.status(404).json({ error: 'Employee not found' });
    }

    console.log('Employee deleted successfully:', deletedEmployee);

    res.status(200).json({
      message: 'Employee deleted successfully',
      employee: deletedEmployee,
    });
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ error: 'Failed to delete employee' });
  }
};

module.exports = { deleteEmployees };
