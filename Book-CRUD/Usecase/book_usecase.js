const bookRepository = require('../Repository/book_repository');

const getBooks = async () => {
    return await bookRepository.getAllBooks();
};

const createBook = async (bookData) => {
    return await bookRepository.addBook(bookData);
};

const modifyBook = async (id, bookData) => {
    return await bookRepository.updateBook(id, bookData);
};

const removeBook = async (id) => {
    return await bookRepository.deleteBook(id);
};

const markBookAsFavorite = async (id) => {
    return await bookRepository.markAsFavorite(id);
};

const getRandomBook = async () => {
    return await bookRepository.getRandomBook();
};

module.exports = {
    getBooks,
    createBook,
    modifyBook,
    removeBook,
    markBookAsFavorite, 
    getRandomBook,      
};
