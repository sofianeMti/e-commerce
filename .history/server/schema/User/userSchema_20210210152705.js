const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
 
  type User {
    id: ID!
    email: String!
  }

`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];