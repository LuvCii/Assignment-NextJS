import { Router } from "express";
import {
  create,
  list,
  readId,
  readSlug,
  remove,
  update,
} from "../controllers/product";
import { checkAuth } from "../middlewares/auth";

const productRouter = Router();

productRouter.get("/products", checkAuth, list);
productRouter.get("/products/:id", checkAuth, readId);
productRouter.get("/product/:slug", checkAuth, readSlug);
productRouter.post("/products", checkAuth, create);
productRouter.patch("/products/:id", checkAuth, update);
productRouter.delete("/products/:id", checkAuth, remove);

export default productRouter;
