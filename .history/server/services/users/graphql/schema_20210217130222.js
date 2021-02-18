const { gql } = require('apollo-server');

const typeDefs = gql`

  type User @key(fields:"id") {
    id: ID!
    firstname: String
  }

  extend type Query {
    user(id: ID!) : User
    users: [User]
  }
`;