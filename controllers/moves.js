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
      res.redirect("/moves");
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
    .populate("comments")
    .then((move) => {
      console.log(move.comments);
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

router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Move.findById(req.params.id).then((move) => {
    db.Comment.create(req.body)
      .then((comment) => {
        move.comments.push(comment.id);
        move.save().then(() => {
          res.redirect(`/moves/${req.params.id}`);
        });
      })
      .catch((err) => {
        res.render("error404");
      });
  });
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /moves/:id/rant/:rantId stub");
});

module.exports = router;
