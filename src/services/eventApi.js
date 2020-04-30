import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    eventCreateFailure,
    eventCreateSuccess,
    eventFetchListFailure,
    eventFetchListSuccess
} from "../actions/event/actions";


export const addEvent = (name, description, dateTime) => async (dispatch) => {

    const body = JSON.stringify({name: name, description: description, dateTime: dateTime});

    const formData = new FormData();
    formData.append("eventCreateDTO", body);
    formData.append("files", null);

    axios.post(URLS.apiEvent, formData)
        .then(
            res => {
                dispatch(eventCreateSuccess(res));
                console.log(res)

            })
        .catch(
            error => {
                dispatch(eventCreateFailure(error.response.data.message));
            })
};

export const fetchEventList = () => async (dispatch) =>{
    axios.get(URLS.apiEvent)
        .then(res => {dispatch(eventFetchListSuccess(res))})
        .catch(error => {dispatch(eventFetchListFailure(error))})
};

export const joinEvent = (id) => async  (dispatch) =>{
    axios.post(URLS.apiEvent + '/' + id + '/join')
        .then(res => {console.log(res)})
        .catch(error => { console.log(error)})
};

export const deleteEvent = (id) => async  (dispatch) =>{
    axios.delete(URLS.apiEvent + '/' + id)
        .then(res => {console.log(res)})
        .catch(error => { console.log(error)})
};

export const inviteFriendToEvent = (userId, eventId) => async (dispatch) => {
    axios.post(URLS.apiUser+'/' + userId + '/invite/' + eventId )
        .then(res => {console.log(res)})
        .catch(error => {console.log(error)})
};




