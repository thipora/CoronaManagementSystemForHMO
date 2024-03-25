const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaccinesSchema = new Schema({
    vaccineDate: {type: Date, required: true, max: Date.now()},
    manufacturer: { type: String, required: true, minlength: 2, maxlength: 20 },
    userId: {
        type: Number,
        required: true,
        validate: {
            validator: async function(userId) { 
                // const users = await Vaccines.find({ userId: userId });
                const user = await User.find({ id: userId });
                return !!user;
                // return !!user || users.length > 4;
            },
            message: 'Invalid user ID'
        }
    }
})


const vaccinModel = mongoose.model('Vaccines', VaccinesSchema);


module.exports = vaccinModel;