import {userConstants} from "../../constans/userConstans";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return{
                ...state,
                authenticated: false
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                ...state,
                authenticated: true
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                authenticated: false,
                authError: 'Login failure'
            };
        case userConstants.LOGUOT:
            return {
                ...state,
                userInfo: null,
                authError: null,
                authenticated: false
            };
        default:
            return state
    }
};

export default authReducer