import express from "express";
import { createPost, deletePost, listPost, listPostDetail, updatePost } from "../controllers/post";

const Router = express.Router();

Router.get('/post',listPost);
Router.get('/post/:id',listPostDetail);
Router.put('/post/:id',updatePost);
Router.post('/post',createPost);
Router.delete('/post/:id',deletePost);

export default Router

