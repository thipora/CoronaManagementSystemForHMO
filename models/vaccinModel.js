const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaccinesSchema = new Schema({
    vaccineDate: Date,
    manufacturer: String
})


const vaccinModel = mongoose.model('Vaccines', VaccinesSchema);


module.exports = vaccinModel;