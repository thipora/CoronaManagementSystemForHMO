const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KoronaSchema = new Schema({
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

const userModel = mongoose.model('Korona', KoronaSchema);

module.exports = userModel;


// exports.validAdress = (Data) => {
//     let joiSchema = Joi.object({
//         city: Joi.string().min(2).max(20).required,
//         street: Joi.string().min(2).max(20).required,
//         number: Joi.number.min(0).max(999999999)
//     })
//     return joiSchema.validate(Date)
// }

// exports.validVaccines = (Data) => {
//     let joiSchema = Joi.object({
//         vaccineDate: Joi.Date().required,
//         manufacturer: Joi.string().min(2).max(20).required
//     })
//     return joiSchema.validate(Date)
// }


// exports.validKorona = (Data) => {
//     let joiSchema = Joi.object({
//         positiveTestDate: Joi.Date().required,
//         recoveryDate: Joi.Date()
//     })
//     return joiSchema.validate(Date)
// }



// exports.validUser = (bodyData) => {
//     let joiSchema = Joi.object({
//         firstName: Joi.string().min(2).max(20).required,
//         lastName: Joi.string().min(2).max(20).required,
//         id: Joi.number.min(100000000).max(999999999).require,
//         address: Joi.AddressSchema.validAdress(address),
//         dateOfBirth: Joi.Date().required,
//         phone: Joi.number.min(100000000).max(999999999).require,
//         mobile: Joi.number.min(100000000).max(999999999),
//         vaccines: Array[VaccinesSchema],
//         koronaPatients: Joi.KoronaSchema.validKorona(address),
//     })
//     return joiSchema.validate(bodyData)
// }


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