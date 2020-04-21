import createAction from "../action";
import {postConstants} from "../../constans/postConstans";

export const postLoadRequest = (data) =>createAction(postConstants.POST_LOAD_REQUEST, data);
export const postLoadSuccess = (data) =>createAction(postConstants.POST_LOAD_SUCCESS, data);
export const postLoadFailure = (error) =>createAction(postConstants.POST_LOAD_FAILURE, error);

//export const postCreateRequest = (data) =>createAction(postConstants.POST_CREATE_REQUEST, data);
export const postCreateSuccess = (data) =>createAction(postConstants.POST_CREATE_SUCCESS, data);
export const postCreateFailure = (error) =>createAction(postConstants.POST_CREATE_FAILURE, error);

export const commentsLoadRequest = (data) =>createAction(postConstants.COMMENT_LOAD_REQUEST, data);
export const commentsLoadSuccess = (data) =>createAction(postConstants.COMMENT_LOAD_SUCCESS, data);
export const commentsLoadFailure = (error) =>createAction(postConstants.COMMENT_LOAD_FAILURE, error);