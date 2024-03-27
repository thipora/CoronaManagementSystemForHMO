const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = require("../controllers/members");

const validateVaccineCount = async function(value) {
    const vaccinesCount = await mongoose.model('Vaccines').countDocuments({ userId: value });
    return vaccinesCount < 4;
  };

const VaccinesSchema = new Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Members', required: true,
        validate: { validator: validateVaccineCount, message: 'Cannot add more than 4 vaccines for this user'}},
    vaccineDate: {type: Date, required: true, max: Date.now()},
    manufacturer: { type: String, required: true, minlength: 2, maxlength: 20 }
})


const vaccinModel = mongoose.model('Vaccines', VaccinesSchema);


module.exports = vaccinModel;