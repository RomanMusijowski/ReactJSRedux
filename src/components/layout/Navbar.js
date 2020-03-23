import React from 'react'
import {Link} from "react-router-dom";
import SingInLinks from "./SignInLinks";
import SingOutLinks from "./SignOutLinks";
import {connect} from "react-redux";


const Navbar = () => {

    // const {userInfo} = this.props;
    // console.log(this.props);
    // console.log(userInfo);

    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">TheBest</Link>
                <SingInLinks/>
                <SingOutLinks/>
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo
    }
};


export default connect(mapStateToProps)(Navbar)