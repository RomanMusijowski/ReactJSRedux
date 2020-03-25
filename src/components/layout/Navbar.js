import React, {Component} from 'react'
import {Link} from "react-router-dom";
import SingInLinks from "./SignInLinks";
import SingOutLinks from "./SignOutLinks";
import {connect} from "react-redux";


class Navbar extends Component{
    navbarLinks(){
        if(this.props.authenticated){
            return [
                <SingInLinks/>
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
        authenticated: state.auth.authenticated
    }
};


export default connect(mapStateToProps)(Navbar)