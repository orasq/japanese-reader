const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  cover: String,
  text: String,
  finished: Boolean,
  authorId: String
});

module.exports = mongoose.model("Book", bookSchema);
