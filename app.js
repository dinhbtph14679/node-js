import express from 'express';
import homeRoute from './routers/home';
import products from './routers/products';
import { checkAuth } from './middlewares/checkAuth';
import mongoose from 'mongoose';
import category from './routers/category'
import auth from './routers/auth'
const app = express();

app.use(express.json())
app.use(homeRoute);
app.use("/api",checkAuth,products);
app.use("/api", category);
app.use('/api', auth)

mongoose.connect('mongodb://localhost:27017/we16308');

app.listen(8000, () =>{
    console.log("Anh yêu em nodeJS");
});