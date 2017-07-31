const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoScheme = new Schema({
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

mongoose.model("todos", todoScheme);
