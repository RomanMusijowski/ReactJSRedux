import axios from 'axios'
import URLS from "../shared/Urls.constants";
import {
    loginFailure,
    loginRequest,
    loginSuccess, logoutSuccess,
    registerFailure,
    registerRequest,
    registerSuccess
} from "../actions/auth/actions";
import setAuthToken from "../shared/setAuthToken";
import history from "../shared/history";

const userApi ={
    login,
    register,
    logout
};

function login(usernameOrEmail, password ) {
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const body = JSON.stringify({usernameOrEmail, password});
        dispatch(loginRequest(body));

        axios.post(URLS.apiAuth+'/signin', body, config)
            .then(
                res => {
                    dispatch(loginSuccess(res));

                    const token = res.data.accessToken;
                    localStorage.setItem('jwtToken', token);
                    setAuthToken(token);
                })
            .catch(
                error => {dispatch(loginFailure(error))});
    }
}

function register(user){
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
                res => {
                    dispatch(registerSuccess(res));
                    history.push('/signIn');
                })
            .catch(
                //jdgklasdg;sagas jigo
                //jjjjjjjjjjj
                //
                //
                //dhdfhafhdfhd
                error => {dispatch(registerFailure(error))});
    }
}

function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        dispatch(logoutSuccess('User has logged out successfully.'))
    }
}

export default userApi
