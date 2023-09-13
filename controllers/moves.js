const router = require("express").Router();
const app = router;

//GET / moves
app.get("/", (req, res) => {
  let moves = [
    {
      name: "Rear Naked Choke",
      position: "Back Mount",
      submission: "true",
      escape: "false",
      pic: "/images/cartoon_rearnakedchoke.webp",
    },
    {
      name: "Arm Bar",
      position: "mount",
      submission: "true",
      escape: "false",
      pic: "/images/armbar_pic.jpg",
    },
  ];
  res.render("moves/index", { moves });
});

module.exports = router;
