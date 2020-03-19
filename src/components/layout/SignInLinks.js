import React from 'react'
import {NavLink} from "react-router-dom";
import userApi, { logout} from '../../services/userApi'
import {connect} from "react-redux";


const SingInLinks = (props) => {
    return(
        <div>
            <ul className="right">
                <li><a onClick={props.logout}>Log out</a></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">User</NavLink></li>
            </ul>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(userApi.logout())
    }
}

export default connect(null, mapDispatchToProps)(SingInLinks)