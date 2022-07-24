import { Router } from "express";
import { createCate, listCate, readCate, removeCate, updateCate } from "../controllers/category";


const router = Router()

router.post("/category",createCate)
router.get("/category",listCate)
router.get("/category/:id",readCate)
router.patch("/category/:id",updateCate)
router.delete("/category/:id",removeCate)

export default router