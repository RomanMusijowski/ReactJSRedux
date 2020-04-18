import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadRequest,
    postLoadSuccess,
    postLoadFailure,
    commentsLoadRequest,
    commentsLoadSuccess,
    commentsLoadFailure
} from "../actions/post/actions";
import setAuthToken from "../shared/setAuthToken";
import { withRouter } from "react-router";


/*****
 * Return List Friends login user
 *
 * @returns {function(...[*]=)}
 */
export const getAllPostFriends = () => async (dispatch) =>{
        dispatch(postLoadRequest('Posts loading have started.'));
        axios.get(URLS.apiPost)
            .then((res) => {dispatch(postLoadSuccess(res ))})
            .catch((error) => {dispatch(postLoadFailure(error))})
};

/*****
 * Return List Post comments
 * id post
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const getAllComments = (id/*, page = 1*/) => async (dispatch) =>{
    dispatch(commentsLoadRequest('Comments loading have started.'));
    axios.get(URLS.apiPost+'/'+id+'/comment')
        .then((res) => {dispatch(commentsLoadSuccess(res ))})
        .catch((error) => {dispatch(commentsLoadFailure(error))})
};
