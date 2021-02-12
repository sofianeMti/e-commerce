const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
 
  type User {
    id: ID!
    email: String!
  }

`;