import createAction from "../action";
import {authConstants} from "../../constans/authConstans";

export const loginRequest = (data) => createAction(authConstants.LOGIN_REQUEST, data);
export const loginSuccess = (data) => createAction(authConstants.LOGIN_SUCCESS, data);
export const loginFailure = (error) => createAction(authConstants.LOGIN_FAILURE, error);

export const registerRequest = (data) => createAction(authConstants.REGISTER_REQUEST, data);
export const registerSuccess = (data) => createAction(authConstants.REGISTER_SUCCESS, data);
export const registerFailure = (error) => createAction(authConstants.REGISTER_FAILURE, error);

export const logoutSuccess = (data) => createAction(authConstants.LOGUOT, data);

export const authLoadUserRequest = (data) => createAction(authConstants.AUTH_LOAD_USER_REQUEST, data);
export const authLoadUserSuccess = (data) => createAction(authConstants.AUTH_LOAD_USER_SUCCESS, data);
export const authLoadUserFailure = (error) => createAction(authConstants.AUTH_LOAD_USER_FAILURE, error);
