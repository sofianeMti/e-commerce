const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('user', User);