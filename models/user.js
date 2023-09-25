const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  enail: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
