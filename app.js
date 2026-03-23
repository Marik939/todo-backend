require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { todoRouter } = require('./routes/todo.js');

const app = express();

const corsOptions = {
    origin: 'https://todo-client-1jmp.onrender.com',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', todoRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
});