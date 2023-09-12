const router = require("express").Router();

//GET / moves
router.get("/", (req, res) => {
  res.render("moves/index");
});

module.exports = router;
