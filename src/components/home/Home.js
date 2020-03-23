import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";

class Home extends Component {

    componentDidMount() {
        const {fetchLoadUser} = this.props;
        this.props.fetchLoadUser();
    }

    render() {
        // const {userInfo} = this.props.userInfo;
        // console.log(this.props);
        // console.log(userInfo);
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
