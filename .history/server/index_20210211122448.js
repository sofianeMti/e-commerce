const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('apollo-gateway')

const connectDb = require('./connection');
const port = process.env.Port || 4000;


connectDb();


app.listen(port, () => {
    console.log('server started on port : ' + port)
})
