const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExSchema = new Schema({
    name: String,
    age: String
})


const exModel = mongoose.model('exs', ExSchema);


module.exports = exModel;