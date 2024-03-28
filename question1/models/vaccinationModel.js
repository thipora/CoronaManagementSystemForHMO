import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const validateVaccineCount = async function(value) {
    const vaccinesCount = await mongoose.model('vaccines').countDocuments({ memberId: value });
    return vaccinesCount < 4;
  };

const VaccinesSchema = new Schema({
memberId: { type: Number, ref: 'members', required: true,
validate: { validator: validateVaccineCount, message: 'Cannot add more than 4 vaccines for this member'}},
  vaccineDate: {type: Date, required: true, max: Date.now()},
  manufacturer: { type: String, required: true, minlength: 2, maxlength: 20 }
})


const vaccinModel = mongoose.model('vaccines', VaccinesSchema);


export default vaccinModel;