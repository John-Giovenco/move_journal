const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Move.find()
    .then((moves) => {
      res.render("moves/index", { moves });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Move.create(req.body)
    .then(() => {
      res.redirect("./moves");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/new", (req, res) => {
  res.render("moves/new");
});

router.get("/:id", (req, res) => {
  db.Move.findById(req.params.id)
    .then((move) => {
      res.render("moves/show", { move });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  res.send("PUT /moves/:id stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /moves/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /moves/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /moves/:id/rant/:rantId stub");
});

module.exports = router;
