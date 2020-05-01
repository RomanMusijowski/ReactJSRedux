import createAction from "../action";
import {postConstants} from "../../constans/postConstans";

export const postLoadRequest = (data) =>createAction(postConstants.POST_LOAD_REQUEST, data);
export const postLoadSuccess = (data) =>createAction(postConstants.POST_LOAD_SUCCESS, data);
export const postLoadFailure = (error) =>createAction(postConstants.POST_LOAD_FAILURE, error);