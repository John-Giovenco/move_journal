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
      pic: "https://i1.wp.com/www.studentofbjj.com/wp-content/uploads/2017/02/rearnakedchoke.png?resize=648%2C458&ssl=1",
    },
    {
      name: "Arm Bar",
      position: "mount",
      submission: true,
      escape: false,
      pic: "https://www.ultimatejujitsu.com/images/techniques/armbar-from-the-guard/7.jpg",
    },
  ];
  res.render("moves/index", { moves });
});

module.exports = router;
