import { combineReducers } from "redux";
import authReducers from "./auth.reducers";

const initialState = {
    sidebarShow: true,
    theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return { ...state, ...rest }
      default:
        return state
    }
}

const rootReducer = combineReducers({
    nav: changeState,
    auth: authReducers,
});

export default rootReducer;