import axiosInstance from "./axiosInstance";
import * as URL from '../config/apiUrls';

export const callLoginApi = async (query) => {
    // console.log(axiosInstance.get(URL.USER_EXIST_API + query))
    const {data = {}} = await axiosInstance.get(URL.USER_EXIST_API + query); //if we dont recive any respons then it give rspons like this data = {}
    console.log(data)
    return data;
}