const { check } = require('express-validator');

const bookValidation = [
    check('title').notEmpty().withMessage('Title is required'),
    check('author').notEmpty().withMessage('Author is required'),
    check('isbn')
        .notEmpty()
        .withMessage('ISBN is required')
        .isLength({ min: 10, max: 13 })
        .withMessage('ISBN must be between 10 and 13 characters'),
    check('publishedYear')
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage('Published year must be a valid year'),
];

module.exports = { bookValidation };
