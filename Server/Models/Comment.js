// models/Comment.js
const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  movieId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
