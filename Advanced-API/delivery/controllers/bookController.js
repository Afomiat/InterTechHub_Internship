const Book = require('../../domain/models/Book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user.id });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  try {
    const newBook = new Book({ title, author, publishedYear, userId: req.user.id });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
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
    const deletedBook = await Book.findByIdAndDelete(id);
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
    const book = await Book.findByIdAndUpdate(id, { isFavorite: true }, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await Book.find({ isFavorite: true });
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
