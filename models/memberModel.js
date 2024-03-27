import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city: { type: String, required: true, minlength: 2, maxlength: 20 },
    street: { type: String, required: true, minlength: 2, maxlength: 20 },
    number: { type: Number, required: true }
})

const MemberSchema = new Schema({
    firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
    id: { type: Number, required: true, min: 10000000, max: 999999999},
    address: { type: AddressSchema, required: true },
    dateOfBirth: { type: Date, required: true, max: Date.now() },
    phone: { type: Number, required: true, min: 1000000, max: 999999999 },
    mobile: { type: Number, min: 1000000, max: 999999999 }
});

const memberModel = mongoose.model('members', MemberSchema);

export default memberModel;
























// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const AddressSchema = new Schema({
//     city: String,
//     street: String,
//     number: Number
// })

// const VaccinesSchema = new Schema({
//     vaccineDate: Date,
//     manufacturer: String
// })

// const CoronaSchema = new Schema({
//     positiveTestDate: Date,
//     recoveryDate: Date
// })

// const UserSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     id: Number,
//     address: AddressSchema,
//     dateOfBirth: Date,
//     phone: Number,
//     mobile: Number,
//     vaccines: [VaccinesSchema],
//     coronaPatients: CoronaSchema
// });

// const userModel = mongoose.model('Users', UserSchema);

// module.exports = userModel;
