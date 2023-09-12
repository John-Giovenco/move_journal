const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("GET / moves");
});

module.exports = router;
