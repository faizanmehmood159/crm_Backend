const mongoose = require('mongoose');

const ceoSchema = new mongoose.Schema({
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

const CEO = mongoose.model('CEO', ceoSchema);

module.exports = CEO;
