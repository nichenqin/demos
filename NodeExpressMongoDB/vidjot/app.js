const express = require("express");
const port = 5000;

const app = express();

app.use((req, res, next) => {
  console.log(Date.now());
  req.name = "nichenqin";
  next();
});

app.get("/", (req, res) => {
  console.log(req.name);
  res.send("index");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
