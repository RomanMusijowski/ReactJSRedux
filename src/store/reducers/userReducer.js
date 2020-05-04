import {userConstants} from "../../constans/userConstans"
import {authConstants} from "../../constans/authConstans";

const INITIAL_STATE = {

};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userConstants.USER_PROFILE_LOAD_SUCCESS:
            const newUserId = action.payload.data.id
            const newUser = action.payload.data
            newUser.events = []
            return {
                ...state,
                [newUserId]: newUser
            };
        case userConstants.USER_PROFILE_UPDATE_SECCESS:
            const userId = action.payload.pop();
            const updatedUser = state[userId];
            updatedUser.friends = action.payload
            return{
                ...state,
                    [userId]: updatedUser
            };
        case userConstants.FETCH_USER_EVENTS_SUCCESS:
            const id = action.payload.data[0].userId;   //taking userId from an array
            const user = state[id];
            user.events = action.payload.data
            return{
                ...state,
                [id]: user
            };
        case authConstants.LOGUOT:
            return {};
        default:
            return state
    }
}

export default userReducer