const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const { PORT } = require('./config/env');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
