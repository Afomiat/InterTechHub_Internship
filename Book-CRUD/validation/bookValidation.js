const { check } = require('express-validator');

exports.bookValidation = [
  check('title', 'Title is required').not().isEmpty(),
  check('author', 'Author is required').not().isEmpty(),
  check('publishedYear', 'Published Year is required').isNumeric(),
];
