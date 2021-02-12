const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const connectDb = require('./connection');
const port = 4000;

const gateway = new ApolloGateway({
    serviceList: [{ "name": "users", url : "http://localhost:4001" }]
})

const server = new ApolloServer({
    gateway,
    subscriptions : false
})

connectDb();


server.listen( port  => {
    console.log(`🚀 Server ready at ${port}`);
 });
