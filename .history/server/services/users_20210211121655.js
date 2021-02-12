const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`

  type User @key(fields:"id") {
    id: ID!
    firstname: String
  }

  extend type Query {
    users: [User]
  }
`;

const books = [
    {
      id: '1',
      firstname: 'sofiane',
    },
    {
      id: '2',
      firstname: 'samir',
    },
  ];
  

const resolvers = {
    Query: {
      books: () => books,
    },
  };
  

const server = new ApolloServer({ 
    schema : buildFederatedSchema [{typeDefs, resolvers}]
 });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
 });