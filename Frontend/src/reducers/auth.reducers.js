import { authConstants } from "../actions/constants"

const initialState = {
    token: null,
    admin: null,
    isAuthenticated: false,
    isAuthenticating: false,
    loading: false,
    error: null,
    message: '',
}


export default (state = initialState, action) => {
console.log(action)

    switch(action.type){
        case authConstants.LOGIN_REQUEST: 
            state = {
                ...state,
                isAuthenticating: true,
            }
            break;
        case authConstants.LOGIN_SUCCESS: 
            state = {
                ...state,
                admin: action.payload.admin,
                token: action.payload.token,
                isAuthenticated: true,
                isAuthenticating: false,
            }
            break;   
        case authConstants.LOGOUT_REQUEST: 
            state = {
                ...state,
                loading: true,
            }
            break;     
        case authConstants.LOGOUT_SUCCESS: 
            state = {
                ...initialState,
            }
            break;     
        case authConstants.LOGOUT_FAILURE: 
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;     
        case authConstants.REGISTER_REQUEST: 
            state = {
                ...state,
                isAuthenticating: true,
            }
            break;
        case authConstants.REGISTER_SUCCESS: 
            state = {
                ...state,
                admin: action.payload.admin,
                token: action.payload.token,
                isAuthenticated: true,
                isAuthenticating: false,
            }
            break;       
    }
    return state;
}