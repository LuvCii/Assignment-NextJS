import { addCate, getCate, removeCate, updateCate } from "../api/category";
import useSWR from "swr";


const useCategories = () => {
  const {data, error, mutate} = useSWR("/category")

  //create
  const create = async (item:any) => {
       const category = await addCate(item)
       mutate([...data,category])

  }

  //update
  const update = async (category:any) => {
     await updateCate(category)
    const newCate = data.map((item:any) => item._id === data._id ? category:item)
    mutate(newCate)
  }
  //delete
  const remove = async (_id:any) => {
    if(window.confirm("Are you sure delete"))
    await removeCate(_id)
    const newCategories = data.filter((item:any) => item._id != _id)
    mutate(newCategories)
  }

  return {
    data,
    error,
    create,
    remove,
    update
  }
}

export default useCategories