import {userConstants} from "../../constans/userConstans";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return{
                userIsLoaded: false,
                authenticated: false
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                userIsLoaded: false,
                authenticated: true
            };
        case userConstants.LOGIN_FAILURE:
            return {
                authenticated: false,
                userIsLoaded: false,
                authError: 'Login failure'
            };
        case userConstants.USER_LOAD_SUCCESS:
            return {
                ...state,
                userIsLoaded: true,
                username: action.payload.data.username,
                userInfo: action.payload.data
            };
        case userConstants.LOGUOT:
            localStorage.clear();
            return {
                userInfo: null,
                authError: null,
                userIsLoaded: false,
                authenticated: false,
            };
        default:
            return state
    }
};

export default authReducer