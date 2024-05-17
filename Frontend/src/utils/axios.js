import axios from "axios";
import store from "../store/store";
import { authConstants } from "../actions/constants";

const token = window.localStorage.getItem("token");

const instance = axios.create({
    baseURL: "http://localhost:8080/admin",
    // withCredentials: true,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})

instance.interceptors.request.use((req)=>{
    const {auth} = store.getState();
    if(auth.token){
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
})

instance.interceptors.response.use((res)=>{ 
    return res;
},(error) => {
    console.log(error.response);
    const {status} = error.response;
    if(status === 500 || status === 400){
        localStorage.clear();
        store.dispatch({type: authConstants.LOGOUT_SUCCESS})
    }
    return Promise.reject(error);
})

export default instance;