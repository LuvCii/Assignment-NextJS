import { Router } from "express";
import { signin, signup } from "../controllers/auth";
import { list, userById, remove, update } from "../controllers/user";

const router = Router();

// resful api
router.get("/user", list);
router.get("/user/:id", userById);
router.delete("/user/:id", remove);
router.patch("/user/:id", update);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
