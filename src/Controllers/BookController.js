import Book from '../Models/Book';

exports.listBooks = async (req, res, next) => {
  try {
    const allBooks = await Book.find({});
    return res.json({ books: allBooks });
  } catch(e) {
    res.status(500);
    throw new Error(e);
  }
};

exports.listByAuthor = async (req, res, next) => {
  try {
    const authorBooks = await Book.find({ author: req.query.author });
    return res.json({ books: authorBooks });
  } catch (e) {
    res.status(500);
    throw new Error(e);
  }
};

exports.listByTag = async (req, res, next) => {
  try {
    const booksTag = await Book.find({});
    res.json({ books: booksTag });
  } catch(e) {
    throw new Error(e);
  }
};

exports.listByName = async (req, res, next) => {
  try {
    const title = req.query.title;
    const nameBooks = await Book.find({ title: title });
    res.json({ books: nameBooks });
  } catch(e) {
    throw new Error(e);
  }
}