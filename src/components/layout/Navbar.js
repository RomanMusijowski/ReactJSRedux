import React from 'react'
import {Link} from "react-router-dom";
import SingInLinks from "./SignInLinks";
import SingOutLinks from "./SignOutLinks";


const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">TheBest</Link>
                <SingInLinks/>
                <SingOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar