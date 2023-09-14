const router = require("express").Router();
const moves = require("../models/moves");

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!moves[id]) {
    res.render("error404");
  } else {
    res.render("moves/show", { move: moves[id] });
  }
});

router.get("/new", (req, res) => {
  res.render("moves/new");
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // default image if no image is provided
    req.body.pic =
      "http://www.alliancecarlsbad.com/wp-content/uploads/2017/04/Jacare-thumbs-up.jpg";
  }
  if (!req.body.position) {
    req.body.position = "You can hit this from anywhere!";
  }
  moves.push(req.body);
  res.redirect("/moves");
});

//GET / moves
router.get("/", (req, res) => {
  res.render("moves/index", { moves });
});

module.exports = router;
