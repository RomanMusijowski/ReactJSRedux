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
import {fetchUserProfile} from "./userApi";


const authApi ={
    login,
    register,
    logout,
    fetchLoadUser
};

function fetchLoadUser() {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

        return dispatch =>{
            dispatch(authLoadUserRequest('User loading have started.'));

            axios.get(URLS.apiAuth+'/currentUser')
                .then(
                    (res) => {
                            dispatch(authLoadUserSuccess(res))
                            dispatch(fetchUserProfile(res.data.id))
                    })
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

function register( email, username, firstName, lastName, phoneNumber,
                   gender, password, file, history){
    return dispatch => {


        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('phoneNumber', phoneNumber);
        formData.append('gender', gender);
        formData.append('password', password);
        formData.append('files', file);


        dispatch(registerRequest(formData));
        axios.post(URLS.apiAuth+'/signup', formData)
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

export default withRouter(authApi)
