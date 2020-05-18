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


export const getAllPostUser = (userId) => async (dispatch) =>{ // "page" do dobrej paginacji
    //dispatch(userPostLoadRequest('User oosts loading have started.'));
    axios.get(URLS.apiPost+'/user/'+userId)
        .then(res =>
        {
            //res.data.push(userId)
            var userPosts = res.data
            userPosts.push(userId)
            console.log(userPosts)
            dispatch(userPostLoadSuccess(userPosts  ))
        }
        )
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
