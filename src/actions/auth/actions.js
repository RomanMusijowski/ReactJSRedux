import createAction from "../action";
import {userConstants} from "../../constans/userConstans";

export const loginRequest = (data) => createAction(userConstants.LOGIN_REQUEST, data);
export const loginSuccess = (data) => createAction(userConstants.LOGIN_SUCCESS, data);
export const loginFailure = (error) => createAction(userConstants.LOGIN_FAILURE, error);

export const registerRequest = (data) => createAction(userConstants.REGISTER_REQUEST, data);
export const registerSuccess = (data) => createAction(userConstants.REGISTER_SUCCESS, data);
export const registerFailure = (error) => createAction(userConstants.REGISTER_FAILURE, error);