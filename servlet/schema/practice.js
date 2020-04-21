const graphql = require('graphql')
const ls = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

var books = [{
        name: "Matrix",
        genre: "Sci-fi",
        id: "1"
    },
    {
        name: "pasific rim",
        genre: " Action",
        id: "2"
    },
    {
        name: "parasites",
        genre: "thriller",
        id: "3"
    }
]
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return ls.find(books, {
                    id: args.id
                })
            }
        }
    }

})
module.exports = new GraphQLSchema({
    query: RootQuery
})