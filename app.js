import express from 'express';
import cors  from 'cors'
import homeRoute from './routers/home';
import products from './routers/products';
import { checkAuth } from './middlewares/checkAuth';
import mongoose from 'mongoose';
import category from './routers/category'
import auth from './routers/auth'
const app = express();

app.use(express.json())
app.use(cors())
app.use(homeRoute);
app.use("/api",checkAuth,products);
app.use("/api", category);
app.use('/api', auth)

mongoose.connect('mongodb://localhost:27017/we16308');

const PORT = 8000

app.listen(PORT, () =>{
    console.log(`Server run start port ${PORT}`);
});