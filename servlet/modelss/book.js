const mangoose = require('mongoose')
const Schema = mangoose.Schema;

const bookSchema = new Schema({
 
    name: String,
    genre: String,
    authorid: String
})

module.exports = mangoose.model("Book", bookSchema);