const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  author: { type: String, default: "Anonymous" },
  percentage: { type: Number, required: true },
  content: { type: String, default: "" },
});

module.exports = mongoose.model("Comment", commentSchema);
