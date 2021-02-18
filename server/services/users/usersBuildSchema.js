const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const { ApolloServerPluginInlineTrace } = require ('apollo-server-core');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDb = require('../../connection');

const port = 4001;


const server = new ApolloServer({ 
    schema : buildFederatedSchema([{typeDefs, resolvers}]),
    plugins: [
      ApolloServerPluginInlineTrace({
        rewriteError: (err) => err.message.match(SENSTIVE_REGEX) ? null : err,
      }),
    ],
 });

connectDb();

server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Users server ready at ${url}`);
 });