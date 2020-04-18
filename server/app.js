const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
app.use("/graphql", graphqlHTTP({}));
app.listen(4000, () => {
  console.log("load data to the Port 4000 ");
});

const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString,GraphQLSchema } = graphql;

const Booktype =new GraphQLObjectType({
    name=Book,
    fields:()=>({
         id:{
             type:GraphQLString
         },
         name:{
             type:GraphQLString
         },
         genre:{
             type:GraphQLString
         }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:Booktype,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                //code to get data from db

            }
        }
    }
})
 module.exports=new GraphQLSchema({
    query:RootQuery
 })
