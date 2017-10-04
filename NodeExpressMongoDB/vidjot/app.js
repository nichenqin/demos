const express = require("express");
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

app.get("/", (req, res) => {
  const title = "welcome~";
  res.render("index", { title });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
