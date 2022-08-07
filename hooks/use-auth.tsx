import { listUser, removeUser, updateUser, getUser } from "../api/user";
import useSWR from "swr";

const useAuth = (option? :any) => {
    const {data, error, mutate} = useSWR("/user");

    //delete
    const remove = async (_id :any) => {
        if(window.confirm("Bạn có chắc chắn muốn xóa không ?")){
            await removeUser(_id);
            const newUsers = data.filter((item: any) => item.id != _id);
            mutate(newUsers);
        }
        
    };
    //update
    const update = async(user: any) => {
        await updateUser(user)
        const newUser = data.map((item:any) => item._id === data._id ? user :item)
    }
    //getUser
    // const getUserById = async(_id:any) => {
    //     await getUser(_id);
    //     const 
    // }
    return {
        data,
        error,
        remove,
        update
    }
}
export default useAuth