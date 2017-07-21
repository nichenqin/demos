const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
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

const getUserFilePath = username =>
  path.join(__dirname, "user", username) + ".json";

const getUser = username => users.find(user => user.username === username);

const saveUser = (username, data) => {
  const fp = getUserFilePath(username);
  fs.unlinkSync(fp);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), { encoding: "utf8" });
};

app.engine("hbs", engines.handlebars);

app.set("views", "./views");
app.set("view engine", "hbs");

app.use("/profilepics", express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { users });
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  const user = getUser(username);
  const { location } = user;

  res.render("user", { user, username, location });
});

app.put("/:username", (req, res) => {
  const { username } = req.param;
  const user = getUser(username);
  user.location = req.body;
  saveUser(username, user);
  res.end();
});

const server = app.listen(3000, () => {
  console.log(`>> Listening at port ${server.address().port}`);
});
