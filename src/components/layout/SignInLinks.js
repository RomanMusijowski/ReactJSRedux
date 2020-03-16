import React from 'react'
import {NavLink} from "react-router-dom";

const SingInLinks = () => {
    return(
        <div>
            <ul className="right">
                <li><NavLink to='/'>Log out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">User</NavLink></li>
            </ul>
        </div>
    )
}

export default SingInLinks