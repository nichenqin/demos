const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
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

// method override middleware
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(flash());

//global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  const title = "welcome~";
  res.render("index", { title });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/ideas", (req, res) => {
  Idea.find({})
    .sort({ date: "desc" })
    .then(ideas => {
      res.render("ideas/index", { ideas });
    });
});

app.get("/ideas/add", (req, res) => {
  res.render("ideas/add");
});

app.get("/ideas/edit/:id", (req, res) => {
  Idea.findById(req.params.id).then(idea => {
    res.render("ideas/edit", { idea });
  });
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
    const newUser = {
      title,
      details
    };

    new Idea(newUser).save().then(idea => {
      req.flash("success_msg", "video idea added");
      res.redirect("/ideas");
    });
  }
});

app.delete("/ideas/:id", (req, res) => {
  Idea.findByIdAndRemove(req.params.id).then(() => {
    req.flash("success_msg", "video idea removed");
    res.redirect("/ideas");
  });
});

app.put("/ideas/:id", (req, res) => {
  Idea.findById(req.params.id).then(idea => {
    idea.title = req.body.title;
    idea.details = req.body.details;
    idea.save().then(() => {
      req.flash("success_msg", "video idea updated");
      res.redirect("/ideas");
    });
  });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
