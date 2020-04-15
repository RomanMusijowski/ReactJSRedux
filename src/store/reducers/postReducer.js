import { postConstants } from "../../constans/postConstans";

const initState = {
   postError: null
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
      case postConstants.POST_LOAD_REQUEST:
          return {};
      case postConstants.POST_LOAD_SUCCESS:
          return {};
      case postConstants.POST_LOAD_FAILURE:
          return {
              ...state,
              postError: 'Posts load failure'
          };
      default:
          return state
  }
};

export default postReducer;