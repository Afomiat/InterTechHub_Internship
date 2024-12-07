const express = require('express');
const connectDB = require('../config/database');
const authRoutes = require('../delivery/routes/authRoutes');
const bookRoutes = require('../delivery/routes/bookRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
1