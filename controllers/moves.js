const router = require("express").Router();
const db = require("../models");

//Get moves from index page
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

//New Move Form Post Route
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

//New Move Form
router.get("/new", (req, res) => {
  res.render("moves/new");
});

//Show page for moves
router.get("/:id", (req, res) => {
  db.Move.findById(req.params.id)
    .populate("comments")
    .then((move) => {
      res.render("moves/show", { move });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//Edit a move
router.get("/:id/edit", (req, res) => {
  db.Move.findById(req.params.id)
    .then((move) => {
      res.render("moves/edit", { move });
    })
    .catch((err) => {
      res.render("error404");
      console.log("error");
    });
});

// Sending edited move
router.put("/:id", (req, res) => {
  db.Move.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/moves/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//Delete a move
router.delete("/:id", (req, res) => {
  db.Move.findByIdAndDelete(req.params.id)
    .then((move) => {
      res.redirect("/moves");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//Comment editing
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

router.delete("/:id/comment/:commentId", (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(() => {
      console.log("its gone");
      res.redirect(`/moves/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

module.exports = router;
