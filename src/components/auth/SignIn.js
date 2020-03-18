import React, {Component} from 'react';

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


export default SignIn
