const mongoose = require("mongoose");

const moveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String },
  position: { type: String },
  type: { type: String },
  description: { type: String, required: true },
  date_added: { type: Date },
});

module.exports = mongoose.model("Moves", moveSchema);
