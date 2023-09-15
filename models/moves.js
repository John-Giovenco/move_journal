const mongoose = require("mongoose");

const moveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "./public/images/thumbs-up.jpg" },
  type: { type: String },
  position: { type: String, required: true },
  description: { type: String, required: true },
  date_added: { type: Date, default: Date.now },

  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

moveSchema.methods.showLearned = function () {
  return `${this.name} was learned on ${this.date_added}`;
};

module.exports = mongoose.model("Moves", moveSchema);
