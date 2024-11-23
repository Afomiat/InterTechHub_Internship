const { validationResult } = require('express-validator');
const bookUsecase = require('../Usecase/book_usecase');

const getBooks = async (req, res) => {
    try {
        const books = await bookUsecase.getBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const book = await bookUsecase.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedBook = await bookUsecase.modifyBook(id, req.body);
        if (!updatedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await bookUsecase.removeBook(id);
        if (!deletedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.status(200).json({ msg: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const markAsFavorite = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await bookUsecase.markBookAsFavorite(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book marked as favorite', book });
    } catch (error) {
        return res.status(500).json({ message: 'Error marking book as favorite', error });
    }
};

const getRandomBook = async (req, res) => {
    try {
        console.log('Getting random book...****************************');
        const randomBook = await bookUsecase.getRandomBook();
        if (!randomBook) {
            return res.status(404).json({ message: 'No books found' });
        }
        return res.status(200).json(randomBook);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching recommendations', error });
    }
};

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    markAsFavorite,
    getRandomBook,
};
