const router = require("express").Router();
const moves = require("../models/moves");

//GET / moves
router.get("/", (req, res) => {
  res.render("moves/index", { moves });
});

// New Moves Route
router.get("/new", (req, res) => {
  res.render("moves/new");
});

// Edit Route
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!moves[id]) {
    res.render("error404");
  } else {
    res.render("moves/edit", { move: moves[id] });
  }
});

// Show route
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!moves[id]) {
    res.render("error404");
  } else {
    res.render("moves/show", { move: moves[id], id });
  }
});

// Default post data
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

// Post updated edit route
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!moves[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      req.body.pic =
        "http://www.alliancecarlsbad.com/wp-content/uploads/2017/04/Jacare-thumbs-up.jpg";
    }
    if (!req.body.position) {
      req.body.position = "You can hit this from anywhere!";
    }
    moves[id] = req.body;
    res.redirect(`/moves/${id}`);
  }
});

// Delete route
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!moves[id]) {
    res.render("error404");
  } else {
    moves.splice(id, 1);
    res.redirect("/moves");
  }
});

module.exports = router;
