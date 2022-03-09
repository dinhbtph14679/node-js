const express = require('express');
const home = express.Router();

home.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>Content text</p>
        <img src="https://live.staticflickr.com/4200/35328200091_8920666058_b.jpg"/>
    `)
})

module.exports = home;
