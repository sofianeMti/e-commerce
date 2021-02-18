const { gql } = require("apollo-server");

module.exports = gql`

  extend type Query {
    user(id: ID!): User
    users: [User]
  }

  type User @key(fields: "id") {
    id: ID!
    firstname: String
  }

  type createUser {
  email: String!
  password: String!
  profile: ProfileType!
}
`;
