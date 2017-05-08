const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'user' }
});

const Comment = mongoose.model('comment', CommentsSchema);

module.exports = Comment;
