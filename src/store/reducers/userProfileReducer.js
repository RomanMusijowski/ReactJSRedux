import { userConstants } from "../../constans/userConstans";
import _ from 'lodash';

const initState = {

};

const userProfileReducer = (state = initState, action) => {
    //console.log(action.payload);

    switch (action.type) {
        case userConstants.USER_ID_LOAD_SUCCESS:
            const userProfile = _.mapKeys(action.payload.data.content, 'id');
            return { ...state, ...userProfile};
        case userConstants.USER_ID_LOAD_FAILURE:
            return {
                ...state
            };
        /*
    case postConstants.USER_POST_UNLOAD:
        return{

        };

         */

        default:
            return state
    }
};

export default userProfileReducer;