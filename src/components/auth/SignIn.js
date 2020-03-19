import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";

class SignIn extends Component {

    state = {
        usernameOrEmail: '',
        password: '',
        submitted: false
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true
        });

        const {usernameOrEmail, password} = this.state;
        if (usernameOrEmail && password) {
            this.props.login(usernameOrEmail, password);
        }
    };


    render() {
        const { usernameOrEmail, password, submitted } = this.state;

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Login</h5>

                    <div className={'input-field' + (submitted && !usernameOrEmail ? ' has-error' : '')}>
                        <label htmlFor="usernameOrEmail">Username</label>
                        <input type="text" name="usernameOrEmail" value={usernameOrEmail} onChange={this.handleChange}/>
                        {
                            submitted && !usernameOrEmail &&
                            <div className="help-block  red-text">Username is required</div>
                        }
                    </div>


                    <div className={'input-field' + (submitted && ! password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange}/>
                        {
                            submitted && !password &&
                            <div className="help-block red-text">Password is required</div>
                        }
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapState = (state) => {
    const { loggedIn } = state.auth;
    return loggedIn;
};

const actionCreator = {
    login: userApi.login
};

export default connect(mapState, actionCreator)(SignIn)
