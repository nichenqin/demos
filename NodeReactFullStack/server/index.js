const express = require("express");
const mongoose = require("mongoose");
const { mongoDBURI } = require("./config/keys");
require("./models/User");
require("./service/passport");

mongoose.connect(mongoDBURI, {
  useMongoClient: true
});

const app = express();
require("./routes/authRoute")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(">> Listening at port: " + PORT);
});
