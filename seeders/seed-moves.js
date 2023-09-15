const db = require("../models");

db.Move.create([
  {
    name: "cross collar choke",
    pic: "pic",
    position: "mount",
    type: "submission",
    description: "take mount and choke",
    date_added: "9/15/2023",
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure", err);
    process.exit();
  });
