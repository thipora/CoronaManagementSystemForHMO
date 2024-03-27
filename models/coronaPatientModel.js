const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoronaPatientSchema = new Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Members', required: true, unique: true },
    positiveTestDate: {type: Date, required: true, max: Date.now()},
    recoveryDate: {type: Date, max: Date.now()}
})

const coronaPatientModel = mongoose.model('CoronaPatients', CoronaPatientSchema);

module.exports = coronaPatientModel;