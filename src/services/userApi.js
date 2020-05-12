import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    acceptInviteFailure,
    acceptInviteSuccess,
    addFriendFailure,
    addFriendSuccess,
    deleteFriendFailure,
    deleteFriendSuccess,
    deleteInviteFailure,
    deleteInviteSuccess,
    fetchInvitedEventsFailure,
    fetchInvitedEventsSuccess,
    fetchUserEventsFailure,
    fetchUserEventsSuccess,
    userProfileFriendsSuccess,
    userProfileLoadFailure,
    userProfileLoadSuccess,
    userProfileUpdateFailure
} from "../actions/user/actions";


export const fetchUserProfile = (userId) => async (dispatch) => {
    axios.get(URLS.apiUser + '/' + userId)
        .then(res => {
            dispatch(userProfileLoadSuccess(res))
            dispatch(fetchUserFriends(userId))
            dispatch(fetchUserEvents(userId))

            let eventIds = res.data.invitedEvents.map(e => e.eventId)
            dispatch(fetchInvitedEvents(eventIds))
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
            dispatch(userProfileFriendsSuccess(friends));
        })
        .catch(error => {
            dispatch(userProfileUpdateFailure(error));
        })
}

export const fetchUserEvents = (userId) => async (dispatch) => {
        axios.get(URLS.apiEvent+'/user/' + userId)
        .then(res => {
            if (res.data[0] === undefined){
                dispatch(fetchUserEventsSuccess(userId))
            }else {
                dispatch(fetchUserEventsSuccess(res))
            }
        })
        .catch(error => {
            dispatch(fetchUserEventsFailure(error))
        })
}

export const addFriend = (friendId) => async (dispatch) => {
    axios.put(URLS.apiUser+'/friend/' + friendId)
        .then(res => {
           dispatch(addFriendSuccess(res))
        })
        .catch(error => {
            dispatch(addFriendFailure(error))
        })
}

export const deleteFriend = (friendId, loggedInUserId) => async (dispatch) => {
    axios.delete(URLS.apiUser+'/friend/' + friendId)
        .then(res => {
            dispatch(deleteFriendSuccess(res))
            dispatch(fetchUserFriends(loggedInUserId))
        })
        .catch(error => {
            dispatch(deleteFriendFailure(error))
        })
}

export const deleteInvite = (eventId, userId) => async (dispatch) => {
    axios.delete(URLS.apiUser+'/event/' + eventId)
        .then(res => {
            dispatch(deleteInviteSuccess(res))
            dispatch(fetchUserProfile(userId))
        })
        .catch(error => {
            dispatch(deleteInviteFailure(error))
        })
}

export const acceptInvite = (eventId, userId) => async (dispatch) => {
    axios.post(URLS.apiEvent+'/' + eventId + '/join')
        .then(res => {
            dispatch(acceptInviteSuccess(res))
            dispatch(fetchUserProfile(userId))
        })
        .catch(error => {
            dispatch(acceptInviteFailure(error))
        })
}

export const fetchInvitedEvents = (eventIds) => async (dispatch) => {
    let message = eventIds.map(String).toString();
    let request = {
        params: {
            'eventIDs': message
        }
    }

    axios.get(URLS.apiEvent+'/infos', request)
        .then(res => {
            dispatch(fetchInvitedEventsSuccess(res))
        })
        .catch(error => {
            dispatch(fetchInvitedEventsFailure(error))
        })
}