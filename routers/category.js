import express from "express";
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";

const Router = express.Router();

Router.get('/category', listCategory);
Router.get('/category/:id', listCategoryDetail);
Router.put('/category/:id', updateCategory);
Router.post('/category', createCategory);
Router.delete('/category/:id', deleteCategory);



export default Router;