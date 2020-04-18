import { postConstants } from "../../constans/postConstans";
import _ from 'lodash';

const initState = {}

const postReducer = (state = initState, action) => {
    //console.log(action.payload);

  switch (action.type) {
      case postConstants.POST_LOAD_REQUEST:
          return {
             ...state
          };
      case postConstants.POST_LOAD_SUCCESS:
          const posts = _.mapKeys(action.payload.data, 'id');
          return { ...state, ...posts };
      case postConstants.POST_LOAD_FAILURE:
          return {
              ...state
          };
      case postConstants.COMMENT_LOAD_REQUEST:
          return {
              ...state
          };
      case postConstants.COMMENT_LOAD_SUCCESS:
          const comment = _.mapKeys(action.payload.data, 'id');
          return { ...state, ...comment };
      case postConstants.COMMENT_LOAD_FAILURE:
          return {
              ...state
          };
      default:
          return state
  }
};

export default postReducer;