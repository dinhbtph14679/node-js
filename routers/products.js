const express = require('express');
const products = express.Router();

products.get('/products', (req, res) => {
    res.send(`
        <h1>Products Page</h1>
    `)
})

module.exports = products;
