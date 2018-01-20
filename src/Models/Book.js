import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  tags: [String]
});

module.exports = mongoose.model("Book", bookSchema);
