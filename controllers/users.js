const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt").bcrypt;
const jwt = require("jsonwebtoken").jwt;

//login route
router.get("/login", (req, res) => {
  res.render("users/login");
});

//New user Form
router.get("/signup", (req, res) => {
  res.render("users/signup");
});

//create a new user

router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) throw err;
    if (user) {
      res.status(409).json({ message: "user already exists" });
    }

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new user({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res
        .status(201)
        .json({
          message: "User created!",
        })
        .then(() => {
          re.redirect("/");
        });
    }
  });
});

// login a user
router.post("/login", async (req, res) => {
  try {
    const user = await user.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({
        message: "Login Failed",
      });
    }
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        res.status(401).json({
          message: "incorrect password",
        });
      }
      const accessToken = generateAccessatoken({ user: req.body.email });

      res.status(200).json({
        accessToken: accessToken,
        userId: user._id,
      });
      res.status(200).json({
        userId: user._id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
