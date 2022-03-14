import express from 'express';
import homeRoute from './routers/home';
import products from './routers/products';
import productsDetail from './routers/detailProduct';
import { checkAuth } from './middlewares/checkAuth';

const app = express();

// su dung router
app.use(homeRoute);
app.use(checkAuth,products);
app.use(productsDetail);

app.listen(8000, () =>{
    console.log("Chay thanh cong");
});