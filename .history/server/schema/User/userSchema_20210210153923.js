const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
 
  type User {
    id: ID!
    email: String!
  }

`;

const user = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
      user: () => user,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });