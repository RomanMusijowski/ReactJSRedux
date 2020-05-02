import React from 'react'
import {NavLink, useHistory} from "react-router-dom";
import userApi, {logout} from '../../services/userApi'
import {connect, useDispatch} from "react-redux";

const SingInLinks = (props) => {

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
                <li><NavLink to='/profile' className="btn btn-floating pink lighten-1">{props.username}</NavLink></li>
                <li><NavLink to='/event' className="btn btn-floating pink lighten-1">EV</NavLink></li>
            </ul>
        </div>
    )
};

const actionCreator = {
    logout: userApi.logout
};

export default connect(null, actionCreator)(SingInLinks)