const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRouter = require('./routers/book_router');
const { connectDB } = require('./Database/DB');
const { config } = require('dotenv');

config(); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();


app.use('/books', bookRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
