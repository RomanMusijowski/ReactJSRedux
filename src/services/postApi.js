import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadRequest,
    postLoadSuccess,
    postLoadFailure
} from "../actions/post/actions";
import setAuthToken from "../shared/setAuthToken";
import { withRouter } from "react-router";

const  postApi = {
  getAllPostFriends
};

/*****
 * Return List Friends login user
 *
 * @returns {function(...[*]=)}
 */
function getAllPostFriends() {
  if (localStorage.token) { setAuthToken(localStorage.token); }
    return dispatch => {
        dispatch(postLoadRequest('Posts loading have started.'));

        axios.get(URLS.apiPost)
            .then(
                (res) => {
                    dispatch(postLoadSuccess(res ))})
            .catch(
                (error) => {dispatch(postLoadFailure(error))})

    }
}

export default withRouter(postApi)