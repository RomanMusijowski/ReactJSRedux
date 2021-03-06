import React from 'react'
import {NavLink} from "react-router-dom";

const SingOutLinks = () => {
    return(
        <div>
            <ul className="right">
                <li><NavLink to='/signIn'>Log in</NavLink></li>
                <li><NavLink to='/signUp'>Sign up</NavLink></li>
            </ul>
        </div>
    )
}

export default SingOutLinks
