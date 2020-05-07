import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    userProfileLoadFailure,
    userProfileLoadSuccess,
    userProfileUpdateFailure,
    userProfileUpdateSuccess
} from "../actions/user/actions";
import {fetchUserEventsFailure, fetchUserEventsSuccess} from "../actions/user/actions";


export const fetchUserProfile = (userId) => async (dispatch) => {
    axios.get(URLS.apiUser + '/' + userId)
        .then(data => {
            dispatch(userProfileLoadSuccess(data))
            dispatch(fetchUserFriends(userId))
            dispatch(fetchUserEvents(userId))
        })
        .catch(error => {
            dispatch(userProfileLoadFailure(error))
        })
}

export const fetchUserFriends = (userId) => async (dispatch) => {
    axios.get(URLS.apiUser + '/' + userId + '/friend')
        .then(res => {
            var friends = res.data.content
            friends.push(userId)
            dispatch(userProfileUpdateSuccess(friends));
        })
        .catch(error => {
            dispatch(userProfileUpdateFailure(error));
        })
}

export const fetchUserEvents = (userId) => async (dispatch) => {
        axios.get(URLS.apiEvent+'/user/' + userId)
        .then(res => {
            dispatch(fetchUserEventsSuccess(res))
        })
        .catch(error => {
            dispatch(fetchUserEventsFailure(error))
        })
}

