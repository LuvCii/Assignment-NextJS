import { add, edit, readId, removeItem } from "../api/product";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, mutate } = useSWR("/products");

  //get
  const getProductId = async (id: any) => {
    const product = await readId(id);
    mutate(product);
  };
  // create
  const create = async (item: any) => {
    const product = await add(item);
    mutate(product);
  };
  // update
  const update = async (item: any) => {
    const product = await edit(item);
    mutate(product);
  };
  // delete
  const remove = async (_id: any) => {
    if (window.confirm("Are you sure delete?")) {
      await removeItem(_id);
      const newProducts = data.filter((item: any) => item._id != _id);
      mutate(newProducts);
    }
  };
  return {
    data,
    error,
    create,
    remove,
    update,
    getProductId,
  };
};

export default useProducts;
