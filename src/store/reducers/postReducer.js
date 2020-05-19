import { postConstants } from "../../constans/postConstans";
import _ from 'lodash';
import {authConstants} from "../../constans/authConstans";

const initState = {

}

const postReducer = (state = initState, action) => {
    //console.log(action.payload);

  switch (action.type) {
      case postConstants.POST_LOAD_REQUEST:
          return {
             ...state
          };
      case postConstants.POST_LOAD_SUCCESS:
          //const posts = _.mapKeys(action.payload.data, 'id');
          //const posts = _.chunk(action.payload.data, 2);
          const posts = action.payload.data;

          return { ...state, ...posts, numberPage: posts.length};
      case postConstants.POST_LOAD_FAILURE:
          return {
              ...state
          };
      case postConstants.POST_UNLOAD:
          return {

          };
      case authConstants.LOGUOT:
          return {};

      default:
          return state
  }
};

export default postReducer;