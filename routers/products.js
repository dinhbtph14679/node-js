import express from 'express';
import { createProduct, deleteProduct, listProduct, productDetail, updateProduct } from '../controllers/product';
import { userById } from '../controllers/user';
import { isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth';
const router = express.Router();



router.get('/products', listProduct);
router.get('/products/:id', productDetail);
router.post('/products/',createProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);

router.param('userId', userById)
export default router;
