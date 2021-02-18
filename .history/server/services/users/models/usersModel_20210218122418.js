const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstname: String,
});

module.exports = mongoose.model("user", user);
