const { validationResult } = require('express-validator');
const bookUsecase = require('../../Usecase/bookUsecase');

exports.getBooks = async (req, res) => {
  try {
    const books = await bookUsecase.getBooks(req.user.id);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.createBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const book = await bookUsecase.createBook({ ...req.body, userId: req.user.id });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedBook = await bookUsecase.modifyBook(id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await bookUsecase.removeBook(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.markAsFavorite = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookUsecase.markBookAsFavorite(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book marked as favorite', book });
  } catch (error) {
    res.status(500).json({ message: 'Error marking book as favorite', error });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookUsecase.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await bookUsecase.getRecommendations();
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRandomBook = async (req, res) => {
  try {
    const randomBook = await bookUsecase.getRandomBook();
    if (!randomBook) {
      return res.status(404).json({ message: 'No books found' });
    }
    res.status(200).json(randomBook);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching random book', error });
  }
};
