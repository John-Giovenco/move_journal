//Modules
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const app = express();

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// controllers and routes
app.use("/moves", require("./controllers/moves"));
app.use("/users", require("./controllers/users"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT, console.log("running on 5000"));
