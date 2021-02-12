const express = require('express');
const expressGraphQl = require('express-graphql');
const app = express();
const connectDb = require('./connection');


connectDb();
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log('server started on port : ' + port)
})