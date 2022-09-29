const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library')
const Schema = mongoose.Schema;
const RegisterSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    password: String,
    cpassword: String

})
var Libdata = mongoose.model('librarydata', RegisterSchema)
module.exports = Libdata;