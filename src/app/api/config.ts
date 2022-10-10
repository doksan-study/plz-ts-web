import axios, { AxiosRequestConfig } from 'axios';
import {getCookie} from "@/util/cookie";
import {cookieList} from "@/constant/localize";


const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
    // validateStatus: function (status) {
    //     return status < 500;
    // }
}
const registrationConfig: AxiosRequestConfig = {
    ...config,
    headers: {Authorization: `Bearer ${getCookie(cookieList[0])}`}
}
const unRegisterAPI = axios.create(config);
const RegisterAPI = axios.create(registrationConfig);

export {unRegisterAPI, RegisterAPI};