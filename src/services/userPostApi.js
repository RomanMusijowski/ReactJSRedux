import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadFailure,
    postLoadRequest, postLoadSuccess,
    userPostLoadFailure,
    userPostLoadRequest,
    userPostLoadSuccess,
    userPostUnload

} from "../actions/post/actions";
import {
    userIdLoadFailure,
    userIdLoadSuccess

} from "../actions/auth/actions";


export const getAllPostUser = (userId, page = 1) => async (dispatch) =>{ // "page" do dobrej paginacji
    //dispatch(userPostLoadRequest('User oosts loading have started.'));
    axios.get(URLS.apiPost+'/user/'+userId+'?page='+page)
        .then((res) => {dispatch(userPostLoadSuccess(res ))})
        .catch((error) => {dispatch(userPostLoadFailure(error))})
};

export const userPostUnloaded = () => async (dispatch) =>{
    dispatch(userPostUnload())
};

/*
export const getUserProfile = (userId) => async (dispatch) =>{
    axios.get(URLS.apiUser+'/'+userId)
        .then((res) => {dispatch(userIdLoadSuccess(res ))})
        .catch((error) => {dispatch(userIdLoadFailure(error))})
};
 */
