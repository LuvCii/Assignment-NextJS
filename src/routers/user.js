import { Router } from "express";
import { list, remove,  userById } from "../controllers/user";
import { signup, signin } from "../controllers/auth";



const router = Router();

router.get('/user', list);
router.get('/user/:id', userById);
router.delete('/user/:id', remove);
router.post("/signup", signup)
router.post("/signin", signin)

export default router