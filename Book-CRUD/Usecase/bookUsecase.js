const { findAllBooks, findBooksByUserId, createBook, updateBook, deleteBook, markAsFavorite, getRandomBook,findAllFavoriteBooks } = require('../Repository/bookRepository');

exports.getBooks = async (userId) => {
  return await findBooksByUserId(userId);
};

exports.createBook = async (bookData) => {
  return await createBook(bookData);
};

exports.modifyBook = async (id, bookData) => {
  return await updateBook(id, bookData);
};

exports.removeBook = async (id) => {
  return await deleteBook(id);
};

exports.markBookAsFavorite = async (id) => {
  return await markAsFavorite(id);
};

exports.getAllBooks = async () => {
  return await findAllBooks();
};

exports.getRecommendations = async () => {
  return await findAllFavoriteBooks();
};

exports.getRandomBook = async () => {
  return await getRandomBook();
};
