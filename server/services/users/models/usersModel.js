const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('user', User);