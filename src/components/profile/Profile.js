import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {

    render() {
        return (
            <div>
                User Profile
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo
    }
};

export default connect(
    mapStateToProps
)(Profile);