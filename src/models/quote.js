
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qouetsSchema = new Schema({
  speaker: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
});

const Quote = mongoose.model('Quote', qouetsSchema);

module.exports = Quote;
