import axios from 'axios'

export default function setAuthToken(token) {
    console.log('MSG from interceptor');
    if (token){
        console.log('MSG from INTERCETOR')
        console.log(token);
        axios.defaults.headers.common['Authorization'] = token;
    }else {
        delete axios.defaults.headers.common.Authorization;
    }
}