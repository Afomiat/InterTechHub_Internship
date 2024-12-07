const Book = require('../Domain/models/Book');

exports.findAllBooks = async () => {
  return await Book.find();
};

exports.findBooksByUserId = async (userId) => {
  return await Book.find({ userId });
};

exports.createBook = async (book) => {
  return await Book.create(book);
};

exports.updateBook = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
};

exports.deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};

exports.markAsFavorite = async (id) => {
  return await Book.findByIdAndUpdate(id, { isFavorite: true }, { new: true });
};

exports.getRandomBook = async () => {
  const books = await Book.find();
  return books[Math.floor(Math.random() * books.length)];
};
