import express from "express";
import { singin, singup } from "../controllers/auth";
const router = express.Router()

router.post('/signup', singup);
router.post('/signin', singin);

export default router
