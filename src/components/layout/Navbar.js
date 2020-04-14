import React, {Component} from 'react'
import {Link} from "react-router-dom";
import SingInLinks from "./SignInLinks";
import SingOutLinks from "./SignOutLinks";
import {connect} from "react-redux";


class Navbar extends Component{


    navbarLinks(){
        if(this.props.authenticated && this.props.userIsLoaded){
            return [
                <SingInLinks username={this.props.userInfo.username}/>
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
                    <Link to="/" className="brand-logo">TheBest</Link>
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