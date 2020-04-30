import createAction from "../action";
import {userConstants} from "../../constans/userConstans";

export const userFriendsIdSuccess = (data) => createAction(userConstants.USER_FRIENDS_ID_SUCCESS, data);
export const userFriendsIdFailure = (error) => createAction(userConstants.USER_FRIENDS_ID_FAILURE, error);
