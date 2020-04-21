const mangoose = require('mongoose')
const Schema = mangoose.Schema;

const authorSchema = new Schema({

    name: String,
    age: Number
})

module.exports = mangoose.model("Author", authorSchema);