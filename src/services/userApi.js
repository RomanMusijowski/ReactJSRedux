import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    authLoadUserFailure,
    authLoadUserRequest,
    authLoadUserSuccess,
    loginFailure,
    loginRequest,
    loginSuccess,
    logoutSuccess,
    registerFailure,
    registerRequest,
    registerSuccess,
} from "../actions/auth/actions";
import setAuthToken from "../shared/setAuthToken";
import {withRouter} from "react-router";
import {userFriendsIdFailure, userFriendsIdSuccess} from "../actions/user/actions";


const userApi ={
    fetchUserFriendsId,
    fetchLoadUser,
    login,
    register,
    logout
};

function fetchUserFriendsId(userId) {
    return dispatch => {
        axios.get(URLS.apiUser + '/' + userId + '/friendsId')
            .then(res => {
                dispatch(userFriendsIdSuccess(res));
            })
            .catch(error => {
                dispatch(userFriendsIdFailure(error));
            })
    }
}

function fetchLoadUser() {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

        return dispatch =>{
            dispatch(authLoadUserRequest('User loading have started.'));

            axios.get(URLS.apiAuth+'/currentUser')
                .then(
                    (res) => {
                            dispatch(authLoadUserSuccess(res))})
                .catch(
                    (error) => {dispatch(authLoadUserFailure(error))})
        }

}

function login(usernameOrEmail, password, history) {

    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({usernameOrEmail, password});
        dispatch(loginRequest(body));

        axios.post(URLS.apiAuth+'/signin', body, config)
            .then(
                (res) => {
                    dispatch(loginSuccess(res));

                    localStorage.setItem('token', res.data.accessToken);

                    dispatch(fetchLoadUser())
                    history.push('/');
                })
            .catch(
                (error) => {dispatch(loginFailure(error))});
    }
}

function register(user, history){
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const body = JSON.stringify(user);
        dispatch(registerRequest(body));

        axios.post(URLS.apiAuth+'/signup', body, config)
            .then(
                (res) => {
                    dispatch(registerSuccess(res));
                    history.push('/signIn');
                })
            .catch(
                (error) => {dispatch(registerFailure(error))});
    }
}

function logout() {
    return  dispatch => {
        localStorage.removeItem('token');
        dispatch(logoutSuccess, 'User has logged out');
        dispatch(logoutSuccess('User has logged out successfully.'))
    }
}

export default withRouter(userApi)
