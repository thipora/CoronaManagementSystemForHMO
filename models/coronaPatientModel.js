const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoronaPatientSchema = new Schema({
    positiveTestDate: {type: Date, required: true, max: Date.now()},
    recoveryDate: {type: Date, max: Date.now()},
    userId: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: async function(userId) {
                const user = await User.findOne({ id: userId });
                return !!user;
            },
            message: 'Invalid user ID'
        }}
})

const coronaPatientModel = mongoose.model('CoronaPatients', CoronaPatientSchema);

module.exports = coronaPatientModel;