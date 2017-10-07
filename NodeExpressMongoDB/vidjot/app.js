const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const port = 5000;

const app = express();
const ideas = require("./routes/ideas");
const users = require("./routes/users");

require("./config/passport")(passport);

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

// handlerbars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static folder
app.use(express.static(path.join(__dirname, "public")));

// method override middleware
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

app.get("/", (req, res) => {
  const title = "welcome~";
  res.render("index", { title });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use("/ideas", ideas);
app.use("/users", users);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
