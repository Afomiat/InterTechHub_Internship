const dotenv = require('dotenv');
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
};
