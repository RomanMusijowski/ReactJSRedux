import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";

class Home extends Component {

    componentWillMount() {
        this.props.fetchLoadUser();
    }

    render() {
        return (
            <div>
                HOme
                {/*{userInfo}*/}
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
