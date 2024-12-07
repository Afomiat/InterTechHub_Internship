const Book = require('../domain/models/Book');

exports.findAllBooks = async () => {
  return await Book.find();
};

exports.findBooksByUserId = async (userId) => {
  return await Book.find({ userId });
};

exports.createBook = async (book) => {
  return await Book.create(book);
};
