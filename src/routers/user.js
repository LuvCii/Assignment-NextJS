import { Router } from "express";
import { signin, signup } from "../controllers/auth";
import { list, userById, remove } from "../controllers/user";


const router = Router();



// resful api
router.get('/user', list);
router.get('/user/:id', userById);
router.delete('/user/:id',  remove);
router.post('/signin', signin)
router.post('/signin', signup)



export default router