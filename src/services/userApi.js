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
    userLoadRequest
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

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTg0ODI2NTU3LCJleHAiOjE1ODU0MzEzNTd9.UoHXW3a8LTZqijBs98_oL5fCSrbtSe_Fi88oF1E9J2RCIPCFJQ8_zcDrOTaXSIgtN74JOqrsmxltx2TkcajDcA'
            },
        };


        axios.delete(URLS.apiPost+'/1' , config)
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=> {
                console.log(error)
            });

//send request straight forward to auth server
//add request interceptor

        // axios.get(URLS.apiAuth+'/currentUser', config)
        //     .then(
        //         (res) => {
        //             console.log(res);
        //             dispatch(userLoadSuccess(res))})
        //     .catch(
        //         (error) => {dispatch(userLoadFailure(error))})
    }
}

//put to localStorage usernameOrEmail
function login(usernameOrEmail, password, history ) {

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
                (res) => {
                    dispatch(loginSuccess(res));

                    const token = res.data.accessToken;
                    localStorage.setItem('token', token);
                    localStorage.setItem('usernameOrEmail', usernameOrEmail);
                    setAuthToken(token);

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
