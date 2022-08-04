import { User } from "../models/User";

export const isAuthenticate =()=>{
    if(!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}