const express = require('express');
const detailproducts = express.Router();

detailproducts.get('/products/:id', (req, res) => {
    res.send(`
        <h1>Detail Product</h1>
        ${req.params.id}
    `)
})

module.exports = detailproducts;
