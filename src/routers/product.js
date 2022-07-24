import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import { checkAuth } from "../middlewares/auth";

const productRouter = Router();

productRouter.get("/products", checkAuth, list);
productRouter.get("/products/:slug", checkAuth, read);
productRouter.post("/products", checkAuth, create);
productRouter.put("/products", checkAuth, update);
productRouter.delete("/products", checkAuth, remove);

export default productRouter;
