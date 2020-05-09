import createAction from "../action";
import {commentConstants} from "../../constans/commentConstans";

export const commentsLoadSuccess = (data) =>createAction(commentConstants.COMMENT_LOAD_SUCCESS, data);
export const commentsLoadFailure = (error) =>createAction(commentConstants.COMMENT_LOAD_FAILURE, error);
export const commentsLoadUnload = () =>createAction(commentConstants.COMMENT_LOAD_UNLOAD, null);

export const commentsCreateSuccess = (data) =>createAction(commentConstants.COMMENT_CREATE_SUCCESS, data);
export const commentsCreateFailure = (error) =>createAction(commentConstants.COMMENT_CREATE_FAILURE, error);

export const userInfoLoadSuccess = (data) =>createAction(commentConstants.USERINFO_LOAD_SUCCESS, data);
export const userInfoLoadFailure = (error) =>createAction(commentConstants.USERINFO_LOAD_FAILURE, error);