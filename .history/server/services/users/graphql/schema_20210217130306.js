const { gql } = require('apollo-server');

module.exports = gql`

  type User @key(fields:"id") {
    id: ID!
    firstname: String
  }

  extend type Query {
    user(id: ID!) : User
    users: [User]
  }
`;