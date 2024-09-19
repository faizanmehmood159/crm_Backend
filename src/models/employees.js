const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  
}, );

const Employees = mongoose.model('Employees', employeesSchema);

module.exports = Employees;
