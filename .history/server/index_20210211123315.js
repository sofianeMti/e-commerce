const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const connectDb = require('./connection');
const port = process.env.Port || 4000;

const gateway = new ApolloGateway({
    serviceList: [{"name": "users", "url": "http://localhost:4001"}]
})

connectDb();


app.listen(port, () => {
    console.log('server started on port : ' + port)
})