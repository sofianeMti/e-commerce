const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    }
})

module.exports = user = mongoose.model('user', user);