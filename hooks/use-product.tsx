import { add, edit, removeItem } from "../api/product";
import useSWR from "swr";
import { productType } from "../models/product";

const useProducts = () => {
  const { data, error, mutate } = useSWR("/products");

  // create
  const create = async (item: productType) => {
    const product = await add(item);
    mutate(product);
  };
  // update
  const update = async (product: productType) => {
    await edit(product);
    mutate(product);
  };
  // delete
  const remove = async (_id: productType) => {
    if (window.confirm("Are you sure delete?")) {
      await removeItem(_id);
      const newProduct = data.filter((item: any) => item._id != _id);
      console.log(newProduct);
      mutate(newProduct);
    }
  };
  return {
    data,
    error,
    create,
    remove,
    update,
  };
};

export default useProducts;
