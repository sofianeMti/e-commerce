const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    user(id: ID!): User
    users: [User]
  }

  type User @key(fields: "id") {
    id: ID!
    firstname: String!
  }

  extend type Mutation {
    createUser(firstname: String!): User
  }
`;
