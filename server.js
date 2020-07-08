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

app.use('/api/v1/product');

app.get('/', (req, res, next) => {
    res.send('Hello from Node Server')
})

const PORT = process.env.PORT || 3000;

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