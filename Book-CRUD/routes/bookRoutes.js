const express = require('express');
const { check } = require('express-validator');
const bookController = require('../Controllers/BookController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/rbacMiddleware');
const { bookValidation } = require('../validation/bookValidation');

const router = express.Router();

router.get('/', authenticateJWT, checkRole(['user', 'admin']), bookController.getBooks);
router.post('/', authenticateJWT, checkRole(['user']), bookValidation, bookController.createBook);
router.put('/:id', authenticateJWT, checkRole(['user']), bookValidation, bookController.updateBook);
router.delete('/:id', authenticateJWT, checkRole(['user']), bookController.deleteBook);
router.put('/:id/favorite', authenticateJWT, checkRole(['user']), bookController.markAsFavorite);
router.get('/all', authenticateJWT, checkRole(['admin']), bookController.getAllBooks);
router.get('/recommendations', authenticateJWT, checkRole(['user', 'admin']), bookController.getRecommendations);
router.get('/random', authenticateJWT, checkRole(['user', 'admin']), bookController.getRandomBook);

module.exports = router;
