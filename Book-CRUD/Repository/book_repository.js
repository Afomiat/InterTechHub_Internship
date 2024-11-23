const Book = require('../Domain/book_model');

const getAllBooks = async () => {
    return await Book.find();
};

const addBook = async (bookData) => {
    const newBook = new Book(bookData);
    return await newBook.save();
};

const updateBook = async (id, bookData) => {
    return await Book.findByIdAndUpdate(id, bookData, { new: true });
};

const deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id);
};

const markAsFavorite = async (id) => {
    return await Book.findByIdAndUpdate(
        id,
        { isFavorite: true },
        { new: true }
    );
};

const getRandomBook = async () => {
    const books = await Book.find(); 
    const randomBook = books[Math.floor(Math.random() * books.length)];
    return randomBook;
};

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
    markAsFavorite,
    getRandomBook,  
};
