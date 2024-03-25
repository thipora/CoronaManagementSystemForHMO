const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city: String,
    street: String,
    number: Number
})

const VaccinesSchema = new Schema({
    vaccineDate: Date,
    manufacturer: String
})

const CoronaSchema = new Schema({
    positiveTestDate: Date,
    recoveryDate: Date
})

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    id: Number,
    address: AddressSchema,
    dateOfBirth: Date,
    phone: Number,
    mobile: Number,
    vaccines: [VaccinesSchema],
    coronaPatients: CoronaSchema
});

const userModel = mongoose.model('Users', UserSchema);

module.exports = userModel;
