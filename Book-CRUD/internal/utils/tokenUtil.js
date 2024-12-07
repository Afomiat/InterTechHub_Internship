const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/env');

exports.createAccessToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
