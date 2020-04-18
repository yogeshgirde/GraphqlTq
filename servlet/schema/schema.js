const graphql = require('graphql')
const ls = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt
} = graphql;
// dummy Data
var books = [{
        name: 'Name of wind',
        genre: "fantasy",
        id: "1"
    },
    {
        name: 'the final empire',
        genre: "fantasy",
        id: "2"
    },
    {
        name: 'the long earth ',
        genre: "sci-fi",
        id: "3"
    },
];
var authors = [{
        name: "Patrick",
        age: "44",
        id: "1"
    },
    {
        name: "Brandon",
        age: "42",
        id: "2"
    },
    {
        name: "Terry",
        age: "66",
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
const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                //code to get data from db
                return ls.find(books, {
                    id: args.id
                })
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                //code to get data from db
                return ls.find(authors, {
                    id: args.id
                })
            }
        },
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery
})