import {authConstants} from "../../constans/authConstans";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return{
                ...state,
                userIsLoaded: false,
                authenticated: false
            };
        case authConstants.LOGIN_SUCCESS:
            return{
                ...state,
                userIsLoaded: false,
                authenticated: true
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                authenticated: false,
                userIsLoaded: false,
                authError: 'Login failure'
            };
        case authConstants.AUTH_LOAD_USER_SUCCESS:
            return {
                ...state,
                userIsLoaded: true,
                username: action.payload.data.username,
                userInfo: action.payload.data
            };
        case authConstants.LOGUOT:
            localStorage.clear();
            return {
                ...state,
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