const express = require('express');
let { expressGraphQl } = require('express-graphql');
const app = express();
const connectDb = require('./connection');


connectDb();
const port = process.env.Port || 3000;

app.use('/graphql', expressGraphQl({
    graphiql: true
}))

app.listen(port, () => {
    console.log('server started on port : ' + port)
})