import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    loginFailure,
    loginRequest,
    loginSuccess,
    logoutSuccess,
    registerFailure,
    registerRequest,
    registerSuccess,
    userLoadFailure,
    userLoadRequest,
    userLoadSuccess
} from "../actions/auth/actions";
import setAuthToken from "../shared/setAuthToken";
import {withRouter} from "react-router";


const userApi ={
    fetchLoadUser,
    login,
    register,
    logout
};

function fetchLoadUser() {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

        return dispatch =>{
            dispatch(userLoadRequest('User loading have started.'));

            axios.get(URLS.apiAuth+'/currentUser')
                .then(
                    (res) => {
                            dispatch(userLoadSuccess(res))})
                .catch(
                    (error) => {dispatch(userLoadFailure(error))})
        }

}

function login(usernameOrEmail, password, history) {

    return dispatch => {
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
