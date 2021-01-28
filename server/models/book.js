const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, maxLength: 50 },
    cover: {
      type: String,
      minLength: 2 /* minLength: 2 to avoid empty strings in state to be accepted */
    },
    text: String,
    finished: Boolean,
    bookmarkIndex: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
