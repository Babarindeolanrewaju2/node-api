const express = require('express');
const dotEnv = require("dotenv");
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const myMiddleware = (req, res, next) => {
    console.log('Hey Wassup');
    next()
}

app.get('/', myMiddleware, (req, res, next) => {
    res.(201).json('Hello from Node Server')
})

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
    next()
})
