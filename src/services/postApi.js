import axios from 'axios';
import URLS from "../shared/Urls.constants";
import {
    postLoadRequest,
    postLoadSuccess,
    postLoadFailure,
    postCreateSuccess,
    postCreateFailure,
    userPostLikedListLoadSuccess,
    userPostLikedListLoadFailure,
    deletePostSuccess,
    deletePostFailure,
    putPostSuccess, putPostFailure
} from "../actions/post/actions";
import {
    commentsLoadUnload,
    commentsLoadSuccess,
    commentsLoadFailure,
    userInfoLoadSuccess,
    userInfoLoadFailure,
    commentsCreateSuccess,
    commentsCreateFailure,
    deleteCommentSuccess,
    deleteCommentFailure,
    putCommentSuccess, putCommentFailure
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

export const getAllUserPostLiked = (postId) => async (dispatch) => {
    axios.get(URLS.apiPost + '/' + postId + '/liked')
        .then(res => {

            dispatch(userPostLikedListLoadSuccess(res));
        })
        .catch(error => {
            dispatch(userPostLikedListLoadFailure(error));
        })
}

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

export const addComment = (postId ,content) => async (dispatch) => {

    const body = JSON.stringify({content});
/*
    const formData = new FormData();
    formData.append('content',content);
*/
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    axios.post(URLS.apiPost+'/'+postId+'/comment', body, config)
        .then(res => {
            dispatch(commentsCreateSuccess(res))
        })
        .catch( error => {dispatch(commentsCreateFailure(error))})
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

export const deletePost = (id) => async  (dispatch) =>{
    axios.delete(URLS.apiPost + '/' + id)
        .then(res => {
            dispatch(deletePostSuccess(res))
        })
        .catch(error => {
            dispatch(deletePostFailure(error))
        })
};

export const deleteComment = (postId, commentId) => async  (dispatch) =>{
    axios.delete(URLS.apiPost + '/' + postId + '/comment/' +commentId)
        .then(res => {
            dispatch(deleteCommentSuccess(res))
        })
        .catch(error => {
            dispatch(deleteCommentFailure(error))
        })
};

export const putPost = (id, content) => async  (dispatch) =>{

    const formData = new FormData();
    formData.append('content',content);

    axios.put(URLS.apiPost + '/' + id, formData)
        .then(res => {
            dispatch(putPostSuccess(res))
        })
        .catch(error => {
            dispatch(putPostFailure(error))
        })
};

export const putComment = (postId, commentId, content) => async  (dispatch) =>{

    const body = JSON.stringify({content});
    /*
        const formData = new FormData();
        formData.append('content',content);
    */
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    axios.put(URLS.apiPost + '/' + postId + '/comment/' +commentId, body, config)
        .then(res => {
            dispatch(putCommentSuccess(res))
        })
        .catch(error => {
            dispatch(putCommentFailure(error))
        })
};


/*
export const getUserInfo = (userId) => async (dispatch) =>{
    axios.get(URLS.apiUser+'/'+userId)
        .then((res) => {dispatch(userInfoLoadSuccess(res ))})
        .catch((error) => {dispatch(userInfoLoadFailure(error))})
};
*/
