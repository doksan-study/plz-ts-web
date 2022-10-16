import {unRegisterAPI} from "@/app/api/config";

export const productReq = async () => {
    const { data } = await unRegisterAPI.get('/product');
    return data;
}
