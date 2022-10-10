import {unRegisterAPI} from "@/app/api/config";
import {User} from "@/app/api/user/types";

// Login
export const loginReq = async (form :User) => {
    const { data } = await unRegisterAPI.post('/user/login', form);
    return data
}