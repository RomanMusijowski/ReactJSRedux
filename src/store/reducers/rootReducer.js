import {combineReducers} from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    post: postReducer
});

export default rootReducer