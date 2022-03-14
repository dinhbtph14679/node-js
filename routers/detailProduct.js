import express from 'express';
const router = express.Router();

router.get('/products/:id', (req, res) => {
    res.send(`
        <h1 style="color: red">Detail Product</h1>
        ${req.params.id}
    `)
})

export default router;
