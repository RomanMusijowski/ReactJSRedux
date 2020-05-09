import { commentConstants } from "../../constans/commentConstans";
import _ from 'lodash';

const initState = {

};

const commentReducer = (state = initState, action) => {
    //console.log(action.payload);

    switch (action.type) {
        case commentConstants.COMMENT_LOAD_SUCCESS:
            const comment = _.mapKeys(action.payload.data.content, 'id');
            return { ...state, ...comment};
        case commentConstants.COMMENT_LOAD_FAILURE:
            return {
                ...state
            };
        case commentConstants.COMMENT_LOAD_UNLOAD:
            return{

            };

        default:
            return state
    }
};

export default commentReducer;