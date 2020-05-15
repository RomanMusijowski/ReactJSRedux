import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/authApi";

class SignUp extends Component{

    state = {
        user: {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            gender: '',
        },
        file: null,
        submitted: false
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        const {user, file} = this.state;
        if (user.email && user.username && user.firstName && user.lastName
            && user.phoneNumber && user.gender && user.password && file) {

            this.props.register(user.email, user.username, user.firstName, user.lastName, user.phoneNumber,
                user.gender, user.password, file, this.props.history);
        }
    };

    handleChange = (e) => {
        const {user} = this.state;
        this.setState({
            user:{
                ...user,
                [e.target.name]: e.target.value
            }
        });
    };

    handleFileChange = (e) => {
        console.log(e.target.files[0])
        this.setState({
            file: e.target.files[0]
        })
    }

    render() {
        const {registerError} = this.props;
        const {user, file, submitted} = this.state;

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Register</h5>
                    <div className={'input-field' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text"  name="username" value={user.username} onChange={this.handleChange}/>
                        {
                            submitted && !user.username &&
                            <div className="help-block  red-text">Username is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! user.email ? ' has-error' : '')}>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" value={user.email} onChange={this.handleChange}/>
                        {
                            submitted && !user.email &&
                            <div className="help-block red-text">email is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">firstName</label>
                        <input type="text"  name="firstName" value={user.firstName} onChange={this.handleChange}/>
                        {
                            submitted && !user.firstName &&
                            <div className="help-block  red-text">firstName is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">lastName</label>
                        <input type="text"  name="lastName" value={user.lastName} onChange={this.handleChange}/>
                        {
                            submitted && !user.lastName &&
                            <div className="help-block  red-text">lastName is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! user.phoneNumber ? ' has-error' : '')}>
                        <label htmlFor="phoneNumber">phoneNumber</label>
                        <input type="text"  name="phoneNumber" value={user.phoneNumber} onChange={this.handleChange}/>
                        {
                            submitted && !user.phoneNumber &&
                            <div className="help-block  red-text">phoneNumber is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! user.gender ? ' has-error' : '')}>
                        <label htmlFor="gender">gender</label>
                        <input type="text" name="gender" value={user.gender} onChange={this.handleChange}/>
                        {
                            submitted && !user.gender &&
                            <div className="help-block red-text">gender is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! user.password ? ' has-error' : '')}>
                        <label htmlFor="password">password</label>
                        <input type="password"  name="password" value={user.password} onChange={this.handleChange}/>
                        {
                            submitted && !user.password &&
                            <div className="help-block red-text">password is required</div>
                        }
                    </div>
                    <div className={'input-field' + (submitted && ! file ? ' has-error' : '')}>
                        <label htmlFor="file">Photo</label>
                        <input accept="image/*" type="file" onChange={this.handleFileChange}/>
                        {
                            submitted && !file &&
                            <div className="help-block red-text">Photo is required</div>
                        }
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Register</button>
                        <div className="red-text center">
                            { registerError ? <p>{registerError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return{
        registerError: state.register.registerError
    }
};

const actionCreator = {
    register: userApi.register
};

export default connect(mapStateToProps, actionCreator)(SignUp)