import {combineReducers} from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer
});

export default rootReducer