import express from 'express';
import cors  from 'cors'
import products from './routers/products';
import { checkAuth } from './middlewares/checkAuth';
import mongoose from 'mongoose';
import category from './routers/category'
import auth from './routers/auth'
import post from './routers/post'
const app = express();

app.use(express.json())
app.use(cors())
app.use("/api",checkAuth,products);
app.use("/api", category);
app.use('/api', auth)
app.use('/api',post)

mongoose.connect('mongodb://localhost:27017/we16308',() =>{
    console.log("Connect MongoDb succsessfully!");
});

const PORT = 8000
app.listen(PORT, () =>{
    console.log(`Server is running in port ${PORT}`);
});