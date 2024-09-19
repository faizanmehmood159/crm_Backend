const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyHeaderSchema = new Schema({
    logo: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
});

const CompanyHeader = mongoose.model('CompanyHeader', companyHeaderSchema);

module.exports = CompanyHeader;
