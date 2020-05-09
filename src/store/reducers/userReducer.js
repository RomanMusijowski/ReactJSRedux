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
            newUser.profileLoad = true
            return {
                ...state,
                [newUserId]: newUser
            };
        case userConstants.USER_FRIENDS_LOAD_SUCCESS:
            const userId = action.payload.pop();
            const updatedUser = state[userId];
            updatedUser.friends = action.payload
            updatedUser.friendsLoad = true
            return{
                ...state,
                    [userId]: updatedUser
            };
        case userConstants.FETCH_USER_EVENTS_SUCCESS:
            if (action.payload.data !== undefined){
                const id = action.payload.data[0].userId;   //taking userId from an array
                const user = state[id];
                user.events = action.payload.data
                user.eventsLoad = true
                return{
                    ...state,
                    [id]: user
                };
            }else {
                const usr = state[action.payload];
                usr.eventsLoad = true
                return {
                    ...state,
                    [action.payload]: usr
                };
            }

        case authConstants.LOGUOT:
            return {};
        default:
            return state
    }
}

export default userReducer