import {userConstants} from "../../constans/userConstans";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user} : {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return{
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGUOT:
            return {};
        default:
            return state
    }
};

export default authReducer