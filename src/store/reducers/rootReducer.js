import {combineReducers} from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    post: postReducer,
    comment: commentReducer
});

export default rootReducer