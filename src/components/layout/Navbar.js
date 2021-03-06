import React, {Component} from 'react'
import {Link} from "react-router-dom";
import SingInLinks from "./SignInLinks";
import SingOutLinks from "./SignOutLinks";
import {connect} from "react-redux";


class Navbar extends Component{

    navbarLinks(){
        const {userInfo} = this.props
        if(this.props.authenticated && this.props.userIsLoaded){
            return [
                <SingInLinks username={userInfo.username}
                             userId={userInfo.id}/>
            ];
        } else {
            return [
                <SingOutLinks/>
            ];
        }
    }

    render() {
         return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Web Developers Site</Link>
                    {this.navbarLinks()}
                </div>
            </nav>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        userIsLoaded: state.auth.userIsLoaded,
        userInfo: state.auth.userInfo
    }
};


export default connect(mapStateToProps)(Navbar)