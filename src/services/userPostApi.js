import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadFailure,
    postLoadRequest, postLoadSuccess,
    userPostLoadFailure,
    userPostLoadRequest,
    userPostLoadSuccess

} from "../actions/post/actions";
import {
    userIdLoadFailure,
    userIdLoadSuccess

} from "../actions/auth/actions";

export const getAllPostUser = (userId) => async (dispatch) =>{
    //dispatch(userPostLoadRequest('User oosts loading have started.'));
    axios.get(URLS.apiPost+'/user/'+userId)
        .then((res) => {dispatch(userPostLoadSuccess(res ))})
        .catch((error) => {dispatch(userPostLoadFailure(error))})
};

export const getUserProfile = (userId) => async (dispatch) =>{
    axios.get(URLS.apiUser+'/'+userId)
        .then((res) => {dispatch(userIdLoadSuccess(res ))})
        .catch((error) => {dispatch(userIdLoadFailure(error))})
};