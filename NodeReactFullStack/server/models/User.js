const mongoogse = require("mongoose");
const { Schema } = mongoogse;

const userSchema = new Schema({
  googleID: String,
  githubID: String
});

mongoogse.model("users", userSchema);
