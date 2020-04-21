const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mangoose = require('mongoose')
const app = express();
//connect to db
// var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";

mangoose.connect(url);
mangoose.connection.once('open', () => {
    console.log("Connected SuccessFully")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(4000, () => {
    console.log("Now Listing on the port 4000 xd")
})