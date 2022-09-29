const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library')
const Schema = mongoose.Schema;
const RegisterSchema = new Schema({
    authername: String,
    category: String,
    autherimage: String

})
var autherdata = mongoose.model('AUTHER', RegisterSchema)
module.exports = autherdata;