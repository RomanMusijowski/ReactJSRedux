import createAction from "../action";
import {userConstants} from "../../constans/userConstans";
import {eventConstant} from "../../constans/eventConstant";

export const loginRequest = (data) => createAction(userConstants.LOGIN_REQUEST, data);
export const loginSuccess = (data) => createAction(userConstants.LOGIN_SUCCESS, data);
export const loginFailure = (error) => createAction(userConstants.LOGIN_FAILURE, error);

export const registerRequest = (data) => createAction(userConstants.REGISTER_REQUEST, data);
export const registerSuccess = (data) => createAction(userConstants.REGISTER_SUCCESS, data);
export const registerFailure = (error) => createAction(userConstants.REGISTER_FAILURE, error);

export const logoutSuccess = (data) => createAction(userConstants.LOGUOT, data);

export const userLoadRequest = (data) => createAction(userConstants.USER_LOAD_REQUEST, data);
export const userLoadSuccess = (data) => createAction(userConstants.USER_LOAD_SUCCESS, data);
export const userLoadFailure = (error) => createAction(userConstants.USER_LOAD_FAILURE, error);

export const userIdLoadSuccess = (data) => createAction(userConstants.USER_ID_LOAD_SUCCESS, data);
export const userIdLoadFailure = (error) => createAction(userConstants.USER_ID_LOAD_FAILURE, error);

export const eventCreateRequest = (data) => createAction(eventConstant.CREATE_REQUEST, data);
export const eventCreateSuccess = (data) => createAction(eventConstant.CREATE_SUCCESS, data);
export const eventCreateFailure = (error) => createAction(eventConstant.CREATE_FAILURE, error);
