import axios from "../utils/axios.js"
import { authConstants } from "./constants.js"


// Action for signing up
export const register = (admin) => {

    // console.log('admin', admin)

    return async (dispatch) => {

        dispatch({type: authConstants.REGISTER_REQUEST});
        const res = await axios.post('/signup', {
            ...admin
        });

        if(res.status === 201){
            const { token, admin} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('admin', JSON.stringify(admin));
            dispatch({
                type: authConstants.REGISTER_SUCCESS,
                payload: {
                    token, admin
                }
            })
        }else{
            if(res.status === 400){
               dispatch({
                type: authConstants.REGISTER_FAILURE,
                payload: {error: res.data.error}
               })
            }
        }
    }
}

// Action for logging in
export const login = (admin) => {

    // console.log('admin', admin)

    return async (dispatch) => {

        dispatch({type: authConstants.LOGIN_REQUEST});
        const res = await axios.post('/signin', {
            ...admin
        });

        if(res.status === 200){
            const { token, admin} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('admin', JSON.stringify(admin));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, admin
                }
            })
        }else{
            if(res.status === 400){
               dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {error: res.data.error}
               })
            }
        }
    }
}

// Action for access the logged in user data 
export const isLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const admin = JSON.parse(localStorage.getItem('admin'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, admin
                }
            })
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {error: 'Failed to login'}
               })
        }
    }
}

// Action for logging out
export const logout = () => {
    return async dispatch => {

        dispatch({type: authConstants.LOGOUT_REQUEST})
        const res = await axios.get('/signout');

        if(res.status === 200){
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            });
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {error: res.data.error}
            });
        }

        
    }
}