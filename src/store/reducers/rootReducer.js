import {combineReducers} from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import registerReducer from "./registerReducer"
import eventReducer from "./eventReducer"


const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    post: postReducer,
    event: eventReducer,

});

export default rootReducer