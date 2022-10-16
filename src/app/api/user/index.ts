import {registerAPI, unRegisterAPI} from "@/app/api/config";
import {MyInfo, User} from "@/model/user";

// Login
export const loginReq = async (form :User) => {
    const { data } = await unRegisterAPI.post('/user/login', form);
    return data
}

// Info Myself
export const myInfoReq = async () => {
    const { data }:MyInfo = await registerAPI.get('/user/me');
    return data;
}