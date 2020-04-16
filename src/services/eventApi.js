import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {eventCreateFailure, eventCreateRequest, eventCreateSuccess} from "../actions/auth/actions";


export const addEvent = (name, description, dateTime) => async (dispatch) => {

    const body = JSON.stringify({name: name, description: description, dateTime: dateTime});

    const formData = new FormData();
    formData.append("eventCreateDTO", body);
    formData.append("files", null);
    dispatch(eventCreateRequest(formData));

    axios.post(URLS.apiEvent, formData)
        .then(
            res => {
                dispatch(eventCreateSuccess(res));
                console.log(res)
            })
        .catch(
            error => {
                dispatch(eventCreateFailure(error));
                console.log(error)
            })
}



