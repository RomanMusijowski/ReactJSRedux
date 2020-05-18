import { postConstants } from "../../constans/postConstans";
import _ from 'lodash';

const initState = {

};

const userPostReducer = (state = initState, action) => {
    //console.log(action.payload);

    switch (action.type) {
        case postConstants.USER_POST_LOAD_SUCCESS:
            const userPost = _.mapKeys(action.payload.data, 'id');
           // const page = action.payload.data;
            return { ...state, ...userPost, /*...page*/};
        case postConstants.USER_POST_LOAD_FAILURE:
            return {
                ...state
            };
        case postConstants.USER_POST_UNLOAD:
            return{

            };



        default:
            return state
    }
};

export default userPostReducer;