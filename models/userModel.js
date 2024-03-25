// const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    city: { type: String, required: true, minlength: 2, maxlength: 20 },
    street: { type: String, required: true, minlength: 2, maxlength: 20 },
    number: { type: Number, required: true }
})

// const VaccinesSchema = new Schema({
//     vaccineDate: {type: Date, required: true, max: Date.now()},
//     manufacturer: { type: String, required: true, minlength: 2, maxlength: 20 }
// })

// const KoronaSchema = new Schema({
//     positiveTestDate: {type: Date, required: true, max: Date.now()},
//     recoveryDate: {type: Date, max: Date.now()}
// })

// const UserSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     id: Number,
//     address: AddressSchema,
//     dateOfBirth: Date,
//     phone: Number,
//     mobile: Number,
//     vaccines: Array[VaccinesSchema],
//     koronaPatients: KoronaSchema
// });

const UserSchema = new Schema({
    firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
    id: { type: Number, required: true, unique: true, min: 100000000, max: 999999999 },
    address: { type: AddressSchema, required: true },
    dateOfBirth: { type: Date, required: true, max: Date.now() },
    phone: { type: Number, required: true, min: 1000000, max: 999999999 },
    mobile: { type: Number, min: 100000000, max: 999999999 }
});

    // vaccines: { type: [VaccinesSchema], validate: [vaccinesLimit, '{PATH} exceeds the limit of 4'] },
    // coronaPatients: { type: KoronaSchema }



// const vaccinesLimit = (value) => {
//     return value.length<=4;
// }



const userModel = mongoose.model('Users', UserSchema);

module.exports = userModel;


// exports.validateUser = (userData) => {
//     const schema = Joi.object({
//         firstName: Joi.string().min(2).max(20).required(),
//         lastName: Joi.string().min(2).max(20).required(),
//         id: Joi.number().integer().min(100000000).max(999999999).required(),
//         address: Joi.object({
//             city: Joi.string().min(2).max(20).required(),
//             street: Joi.string().min(2).max(20).required(),
//             number: Joi.number().min(0).max(999999999)
//         }),
//         dateOfBirth: Joi.date().max('now').required(),
//         phone: Joi.number().min(100000000).max(999999999).required(),
//         mobile: Joi.number().min(100000000).max(999999999),
//         vaccines: Joi.array().items(Joi.object({
//             vaccineDate: Joi.date().required(),
//             manufacturer: Joi.string().min(2).max(20).required()
//         })).max(4),
//         coronaPatients: Joi.object({
//             positiveTestDate: Joi.date().required(),
//             recoveryDate: Joi.date()
//         })
//     });
    
//     return schema.validate(userData);
// }


























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
