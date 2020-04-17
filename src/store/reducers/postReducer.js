import { postConstants } from "../../constans/postConstans";
import _ from 'lodash';

const initState = {


};

const postReducer = (state = initState, action) => {
    //console.log(action.payload.data);

  switch (action.type) {
      case postConstants.POST_LOAD_REQUEST:
          return {};
      case postConstants.POST_LOAD_SUCCESS:
          const posts = _.mapKeys(action.payload, 'id');
          return {
              ...state,
              ...posts
             //posts: action.payload.data
          };
      case postConstants.POST_LOAD_FAILURE:
          return {
              ...state

          };
      default:
          return state
  }
};

export default postReducer;