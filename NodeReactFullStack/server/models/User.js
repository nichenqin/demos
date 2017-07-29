const mongoogse = require("mongoose");
const { Schema } = mongoogse;

const userSchema = new Schema({
  googleId: String,
  githubID: String
});

mongoogse.model("users", userSchema);
