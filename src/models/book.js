const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/library')
const Schema = mongoose.Schema;
const RegisterSchema = new Schema({
    bookname: String,
    auther: String,
    bookimage: String

})
var bookdata = mongoose.model('book', RegisterSchema)
module.exports = bookdata;