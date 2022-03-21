import express from 'express';
import { createProduct, deleteProduct, listProduct, productDetail, updateProduct } from '../controllers/product';
const router = express.Router();



router.get('/products', listProduct);
router.get('/products/:id', productDetail);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);

export default router;
