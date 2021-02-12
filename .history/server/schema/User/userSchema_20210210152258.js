const { ApolloServer, gql } = require('apollo-server');


module.exports = graphql;

type User {
    id : ID!
    email : String!
}