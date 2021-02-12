const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbUser:dbUser@cluster0.lccr9.mongodb.net/<dbname>?retryWrites=true&w=majority'

const connectDb = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true } );
    console.log('connected !')
}

module.exports = connectDb;