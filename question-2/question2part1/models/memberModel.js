import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city: { type: String, required: true, minlength: 2, maxlength: 20 },
    street: { type: String, required: true, minlength: 2, maxlength: 20 },
    number: { type: Number, required: true }
})

const MemberSchema = new Schema({
    _id: { type: Number, required: true, min: 10000000, max: 999999999},
    firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
    address: { type: AddressSchema, required: true },
    dateOfBirth: { type: Date, required: true, max: Date.now() },
    phone: { type: Number, required: true, min: 1000000, max: 999999999 },
    mobile: { type: Number, min: 1000000, max: 999999999 }
});

const memberModel = mongoose.model('members', MemberSchema);

export default memberModel;
