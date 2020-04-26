import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadRequest,
    postLoadSuccess,
    postLoadFailure,
    postCreateSuccess,
    postCreateFailure
} from "../actions/post/actions";
import {
    commentsLoadUnload,
    commentsLoadSuccess,
    commentsLoadFailure,
    userInfoLoadSuccess,
    userInfoLoadFailure
} from "../actions/comment/actions";




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
    axios.get(URLS.apiPost+'/'+id+'/comment')
        .then((res) => {dispatch(commentsLoadSuccess(res))}) // return data
        .catch((error) => {dispatch(commentsLoadFailure(error))})
};

export const commentsUnload = () => async (dispatch) =>{
    dispatch(commentsLoadUnload())
};

export const postLike = (id) => async (dispatch) =>{
    axios.get(URLS.apiPost+'/'+id+'/like')
        .then(res => {console.log(res)})
        .catch(error => {console.log(error)})
};

export const commentLike = (postId, commentId) => async (dispatch) =>{
    axios.get(URLS.apiPost+'/'+postId+'/comment/'+commentId+'/like')
        .then(res => {console.log(res)})
        .catch(error => {console.log(error)})
};


/*
export const getUserInfo = (userId) => async (dispatch) =>{
    axios.get(URLS.apiUser+'/'+userId)
        .then((res) => {dispatch(userInfoLoadSuccess(res ))})
        .catch((error) => {dispatch(userInfoLoadFailure(error))})
};
*/
