const express = require('express');

const { body, validationResult } = require("express-validator");
const { fstat } = require('fs');

const app = express();

app.use(express.json());

app.get('./data/book.json', function (req, res) {
    res.render('index');
});

fs.readFile("book", (error, data))

app.listen(3000); 