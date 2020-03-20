import {userConstants} from "../../constans/userConstans";

const initialState = {
    registerError: null
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {};
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                registerError: 'Registration failure'
            };
        default:
            return state
    }
};

export default registerReducer