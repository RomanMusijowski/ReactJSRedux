import {authConstants} from "../../constans/authConstans";

const initialState = {
    registerError: null
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.REGISTER_REQUEST:
            return {};
        case authConstants.REGISTER_SUCCESS:
            return {};
        case authConstants.REGISTER_FAILURE:
            return {
                ...state,
                registerError: 'Registration failure'
            };
        default:
            return state
    }
};

export default registerReducer