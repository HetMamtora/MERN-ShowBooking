const express = require('express');
const app = express();

const cors = require('cors');
const connectDB = require('./dbConnection');
const Ticket = require('./schema');

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', require('./routes'));

app.listen(8000, () => {
    console.log("MongoDB is running on Port: 8000");
});
