const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const connectDb = require('./connection');
const port = 4000;

const gateway = new ApolloGateway({
    serviceList: [{ "name": "users", url : "http://localhost:4000" }]
})

const server = new ApolloServer({
    gateway,
    subscriptions : false
})

connectDb();


server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
 });
