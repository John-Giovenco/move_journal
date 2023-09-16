const db = require("../models");

// To use await, we need an async function.
async function seed() {
  let move = await db.Move.findOne({ name: "Rear Naked Chokes" });

  //fake sample comment
  let comment = await db.Comment.create({
    author: "john",
    percentage: 5.0,
    content: "hi",
  });

  move.comments.push(comment.id);

  await move.save();

  process.exit();
}

seed();
