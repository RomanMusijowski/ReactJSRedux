import createAction from "../action";
import {userConstants} from "../../constans/userConstans";

export const userProfileLoadSuccess = (data) => createAction(userConstants.USER_PROFILE_LOAD_SUCCESS, data)
export const userProfileLoadFailure = (error) => createAction(userConstants.USER_PROFILE_LOAD_FAILURE, error)

export const userProfileFriendsSuccess = (data) => createAction(userConstants.USER_FRIENDS_LOAD_SUCCESS, data)
export const userProfileUpdateFailure = (error) => createAction(userConstants.USER_FRIENDS_LOAD_FAILURE, error)

export const fetchUserEventsSuccess =(data) => createAction(userConstants.FETCH_USER_EVENTS_SUCCESS, data)
export const fetchUserEventsFailure = (error) => createAction(userConstants.FETCH_USER_EVENTS_FAILURE, error)

export const addFriendSuccess =(data) => createAction(userConstants.ADD_FRIEND_SUCCESS, data)
export const addFriendFailure = (error) => createAction(userConstants.ADD_FRIEND_FAILURE, error)

export const deleteFriendSuccess =(data) => createAction(userConstants.DELETE_FRIEND_SUCCESS, data)
export const deleteFriendFailure = (error) => createAction(userConstants.DELETE_FRIEND_FAILURE, error)

export const deleteInviteSuccess =(data) => createAction(userConstants.DELETE_INVITE_SUCCESS, data)
export const deleteInviteFailure = (error) => createAction(userConstants.DELETE_INVITE_FAILURE, error)

export const acceptInviteSuccess =(data) => createAction(userConstants.ACCEPT_INVITE_SUCCESS, data)
export const acceptInviteFailure = (error) => createAction(userConstants.ACCEPT_INVITE_FAILURE, error)

export const fetchInvitedEventsSuccess =(data) => createAction(userConstants.FETCH_INVITED_EVENTS_SUCCESS, data)
export const fetchInvitedEventsFailure = (error) => createAction(userConstants.FETCH_INVITED_EVENTS_FAILURE, error)

export const userUpdateSuccess =(data) => createAction(userConstants.USER_UPDATE_SUCCESS, data)
export const userUpdateFailure = (error) => createAction(userConstants.USER_UPDATE_FAILURE, error)