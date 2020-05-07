import {combineReducers} from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import userPostReducer from "./userPostReducer";
import userProfileReducer from "./userProfileReducer";
import registerReducer from "./registerReducer"
import eventReducer from "./eventReducer"
import userReducer from './userReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    post: postReducer,
    comment: commentReducer,
    userPost: userPostReducer,
    userProfile: userProfileReducer,
    event: eventReducer,
    user: userReducer

});

export default rootReducer