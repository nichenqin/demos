const fs = require("fs");
const express = require("express");
const app = express();
const engines = require("consolidate");

const users = [];

fs.readFile("users.json", { encoding: "utf8" }, (err, data) => {
  if (err) throw err;

  JSON.parse(data).forEach(user => {
    user.name.full = user.name.first + user.name.last;
    users.push(user);
  });
});

app.engine("hbs", engines.handlebars);

app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { users });
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  res.render("user", { username });
});

const server = app.listen(3000, () => {
  console.log(`>> Listening at port ${server.address().port}`);
});
