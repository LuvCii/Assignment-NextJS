import instance from "./instance";

export const listUser =() => {
    return instance.get(`/user`);
}
export const removeUser = (id: any) => {
    return instance.delete(`/user/${id}`);
}
export const updateUser = (user: any) => {
    return instance.patch(`/user/${user._id}`, user)
}
export const getUser = (_id: string) => {
    return instance.get(`/user/${_id}`);
}