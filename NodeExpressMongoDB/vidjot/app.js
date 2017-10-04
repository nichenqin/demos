const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const port = 5000;

const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/vidjot-dev", {
    useMongoClient: true
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch(err => {
    console.log(err);
  });

require("./models/idea");
const Idea = mongoose.model("ideas");

// handlerbars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const title = "welcome~";
  res.render("index", { title });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/ideas/add", (req, res) => {
  res.render("ideas/add");
});

app.post("/ideas", (req, res) => {
  const { title, details } = req.body;
  const errors = [];

  if (!title) {
    errors.push({ msg: "Please add title" });
  }

  if (!details) {
    errors.push({ msg: "Please add details" });
  }

  if (errors.length) {
    res.render("ideas/add", {
      errors,
      title,
      details
    });
  } else {
    res.send("passed");
  }
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
