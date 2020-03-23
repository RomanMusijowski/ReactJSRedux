import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";

class Home extends Component {

    //here is a problem with fetching user
    //the user here is undefined, so either i take it in a bad way or he's null in reducer
    //i think first is true

    //i mount this component before loading user
    componentWillMount() {
        const {fetchLoadUser} = this.props;
        this.props.fetchLoadUser();
    }

    render() {
        console.log('It s home component');
        const {userInfo} = this.props;
        console.log(this.props);
        console.log(userInfo);
        return (
            <div>
                HOme
                {userInfo}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo
    }
};

const mapDispatchToProps = {
    fetchLoadUser: userApi.fetchLoadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
