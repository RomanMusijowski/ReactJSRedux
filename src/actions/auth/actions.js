import createAction from "../action";
import {authConstants} from "../../constans/authConstans";

export const loginRequest = (data) => createAction(authConstants.LOGIN_REQUEST, data);
export const loginSuccess = (data) => createAction(authConstants.LOGIN_SUCCESS, data);
export const loginFailure = (error) => createAction(authConstants.LOGIN_FAILURE, error);

export const registerRequest = (data) => createAction(authConstants.REGISTER_REQUEST, data);
export const registerSuccess = (data) => createAction(authConstants.REGISTER_SUCCESS, data);
export const registerFailure = (error) => createAction(authConstants.REGISTER_FAILURE, error);

export const logoutSuccess = (data) => createAction(authConstants.LOGUOT, data);


export const userLoadRequest = (data) => createAction(userConstants.USER_LOAD_REQUEST, data);
export const userLoadSuccess = (data) => createAction(userConstants.USER_LOAD_SUCCESS, data);
export const userLoadFailure = (error) => createAction(userConstants.USER_LOAD_FAILURE, error);

export const userIdLoadSuccess = (data) => createAction(userConstants.USER_ID_LOAD_SUCCESS, data);
export const userIdLoadFailure = (error) => createAction(userConstants.USER_ID_LOAD_FAILURE, error);

export const eventCreateRequest = (data) => createAction(eventConstant.CREATE_REQUEST, data);
export const eventCreateSuccess = (data) => createAction(eventConstant.CREATE_SUCCESS, data);
export const eventCreateFailure = (error) => createAction(eventConstant.CREATE_FAILURE, error);

export const authLoadUserRequest = (data) => createAction(authConstants.AUTH_LOAD_USER_REQUEST, data);
export const authLoadUserSuccess = (data) => createAction(authConstants.AUTH_LOAD_USER_SUCCESS, data);
export const authLoadUserFailure = (error) => createAction(authConstants.AUTH_LOAD_USER_FAILURE, error);

