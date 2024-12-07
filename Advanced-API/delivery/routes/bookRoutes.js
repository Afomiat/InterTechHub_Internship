const express = require('express');
const bookController = require('../controllers/bookController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/rbacMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, checkRole(['user', 'admin']), bookController.getBooks);
router.post('/', authenticateJWT, checkRole(['user']), bookController.createBook);
router.get('/all', authenticateJWT, checkRole(['admin']), bookController.getAllBooks);

module.exports = router;
