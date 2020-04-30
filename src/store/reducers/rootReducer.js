import {combineReducers} from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import userPostReducer from "./userPostReducer";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    post: postReducer,
    comment: commentReducer,
    userPost: userPostReducer,
    userProfile: userProfileReducer
});

export default rootReducer