import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  tags: []
});

module.exports = mongoose.model('Book', bookSchema);
