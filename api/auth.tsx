import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
import { User } from "../models/User";
const users = isAuthenticate()

export const signup = (user: User) => {
  const url = `/signup`;
  return instance.post(url, user);
};
export const signin = (user: User) => {
    const url = `/signin`;
  return instance.post(url, user);
};
