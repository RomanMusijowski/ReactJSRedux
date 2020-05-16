import React from 'react'
import {NavLink, useHistory} from "react-router-dom";
import userApi, {logout} from '../../services/authApi'
import {connect, useDispatch} from "react-redux";

const SingInLinks = ({username, userId}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(userApi.logout());
        history.push("/")
    }

    return(
        <div>
            <ul className="right">
                <li><a onClick={handleLogout}>Log out</a></li>
                <li><NavLink to={'/profile/'+ userId} className="btn btn-floating pink lighten-1">{username}</NavLink></li>
                <li><NavLink to='/event' className="btn btn-floating pink lighten-1">EV</NavLink></li>
                <li><NavLink to='/community' className="btn btn-floating pink lighten-1">COM</NavLink></li>
            </ul>
        </div>
    )
};

const actionCreator = {
    logout: userApi.logout
};

export default connect(null, actionCreator)(SingInLinks)