import express from "express";
import { deleteUser, singin, singup } from "../controllers/auth";
const router = express.Router()

router.post('/singup', singup);
router.post('/singin', singin);
router.delete('/singin/:id', deleteUser);

export default router 
