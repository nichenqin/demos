const express = require("express");
const exphbs = require("express-handlebars");
const port = 5000;

const app = express();

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
