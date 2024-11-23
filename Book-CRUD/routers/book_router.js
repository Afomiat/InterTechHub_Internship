const express = require('express');
const { check } = require('express-validator');
const bookController = require('../Controllers/book_controller');
const { bookValidation } = require('../validation/book_validation');

const router = express.Router();

router.get('/', bookController.getBooks);

router.post('/', bookValidation, bookController.createBook);

router.put('/:id', bookValidation, bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

router.put('/:id/favorite', bookController.markAsFavorite); 

router.get('/recommendations', bookController.getRandomBook); 

module.exports = router;
