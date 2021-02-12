// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// const app = express();
// const connectDb = require('./connection');


// connectDb();
// const port = process.env.Port || 3000;

// app.use('/graphql', graphqlHTTP({
//     graphiql: true
// }))

// app.listen(port, () => {
//     console.log('server started on port : ' + port)
// })

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