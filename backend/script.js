const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./services/db.js');

const app = express();
const PORT = 4201;

dotenv.config({path: './.env'});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const publicDir = path.join(__dirname, '/public')
app.use(express.static(publicDir));

// API routes
app.get('/api', (req, res) => {
    res.json({
        id:1,
        ok:2
    })
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});