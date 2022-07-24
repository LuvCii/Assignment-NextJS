import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import productRouter from "./routers/product";
import categoryRouter from './routers/category'

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", productRouter);
app.use("/api",categoryRouter)


mongoose
  .connect("mongodb://localhost:27017/Assigment-NextJS")
  .then(() => console.log("Ket noi db thanh cong"))
  .then((error) => console.log(error));

const PORT = 8001;
1;
app.listen(PORT, () => {
  console.log("server running port", PORT);
});
