import createAction from "../action";
import {userConstants} from "../../constans/userConstans";

export const userProfileLoadSuccess = (data) => createAction(userConstants.USER_PROFILE_LOAD_SUCCESS, data)
export const userProfileLoadFailure = (error) => createAction(userConstants.USER_PROFILE_LOAD_FAILURE, error)

export const userProfileFriendsSuccess = (data) => createAction(userConstants.USER_FRIENDS_LOAD_SUCCESS, data)
export const userProfileUpdateFailure = (error) => createAction(userConstants.USER_FRIENDS_LOAD_FAILURE, error)

export const fetchUserEventsSuccess =(data) => createAction(userConstants.FETCH_USER_EVENTS_SUCCESS, data)
export const fetchUserEventsFailure = (error) => createAction(userConstants.FETCH_USER_EVENTS_FAILURE, error)