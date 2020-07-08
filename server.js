const express = require('express');
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();


const myMiddleware = (req, res, next) => {
    console.log('Hey Wassup');
    next()
}

app.get('/', myMiddleware, (req, res, next) => {
    res.send('Hello from Node Server')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})