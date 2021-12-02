import axios from "axios";
import { publicRequest, userRequest } from "../utils/utils";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
export const login = async (dispatch, user) =>  {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        const res2 = await userRequest('/auth/users/getInformation', { 
                headers:{
                 'Authorization':`Bearer ${res.data.access_token}`
                }
        }); 
        dispatch(loginSuccess({...res2.data, ...res.data }));
       
    } catch(error) {
        dispatch(loginFailure(error));
    }
}