const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const { ApolloServerPluginInlineTrace } = require ('apollo-server-core');

const port = 4001;


const users = [
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
      users: () => users,
    },
  };


const server = new ApolloServer({ 
    schema : buildFederatedSchema([{typeDefs, resolvers}]),
    plugins: [
      ApolloServerPluginInlineTrace({
        rewriteError: (err) => err.message.match(SENSTIVE_REGEX) ? null : err,
      }),
    ],
 });

server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Users server ready at ${url}`);
 });