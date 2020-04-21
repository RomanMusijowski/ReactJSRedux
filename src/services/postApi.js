import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadRequest,
    postLoadSuccess,
    postLoadFailure,
    commentsLoadRequest,
    commentsLoadSuccess,
    commentsLoadFailure,
    postCreateSuccess, 
    postCreateFailure
} from "../actions/post/actions";
import setAuthToken from "../shared/setAuthToken";




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
 * Create Post
 *
 * @param content
 * @returns {function(...[*]=)}
 */
export const addPost = (content) => async (dispatch) => {

      //const body = JSON.stringify(content);

      const formData = new FormData();
      formData.append('content',content);

      axios.post(URLS.apiPost, formData)
          .then(res => {
              dispatch(postCreateSuccess(res))

          })
          .catch( error => {dispatch(postCreateFailure(error.response.data.message))})
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

