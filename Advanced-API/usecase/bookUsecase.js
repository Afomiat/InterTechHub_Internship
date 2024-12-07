const { findAllBooks, findBooksByUserId, createBook } = require('../repository/bookRepository');

exports.getBooks = async (userId) => {
  return await findBooksByUserId(userId);
};

exports.createBook = async (bookData) => {
  return await createBook(bookData);
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

exports.getAllBooks = async () => {
  return await findAllBooks();
};

exports.getRecommendations = async () => {
  return await Book.find({ isFavorite: true });
};
