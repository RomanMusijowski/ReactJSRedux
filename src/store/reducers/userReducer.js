import {userAction, userConstants} from "../../constans/userConstans"
import _ from "lodash";

const INITIAL_STATE = {

};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userConstants.USER_PROFILE_LOAD_SUCCESS:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case userConstants.USER_PROFILE_UPDATE_SECCESS:
            console.log('Here has to be user object and id of this user')
            return{

            };
        default:
            return state
    }
}