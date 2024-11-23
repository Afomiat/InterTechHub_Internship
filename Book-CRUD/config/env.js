const dotenv = require('dotenv');
dotenv.config();  

module.exports = {
  MONGO_URI: process.env.MONGO_URI, // Access Mongo URI
  PORT: process.env.PORT || 5000,    
};
