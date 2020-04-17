import {combineReducers} from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer"
import eventReducer from "./eventReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    event: eventReducer,
});

export default rootReducer