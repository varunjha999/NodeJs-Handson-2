const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/server', (req, res) => {
    res.send('Welcome Varun!');
    });

const port = process.env.PORT // || 6000;    

app.listen(port, () => {
    console.log('Welcome to the server!');
    });


