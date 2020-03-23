import {userConstants} from "../../constans/userConstans";

const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return{
                ...state
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                ...state,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                authError: 'Login failure'
            };

        case userConstants.USER_LOAD_SUCCESS:
            console.log('YOU HAVE DONE IT');
            console.log(action)
            return {
                ...state,
                userInfo: action.userInfo
            };
        case userConstants.LOGUOT:
            return {};
        default:
            return state
    }
};

export default authReducer