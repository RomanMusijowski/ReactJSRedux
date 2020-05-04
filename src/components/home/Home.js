import React, {Component} from 'react';
import {connect} from "react-redux";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";
import {fetchUserFriends, fetchUserProfile} from "../../services/userApi";

class Home extends Component {

    fetchUserData() {
        this.props.fetchUserProfile(this.props.userInfo.id);
        this.props.fetchUserFriends(this.props.userInfo.id);
    }

    render() {
        const {userIsLoaded} = this.props;
        return (
            <div>
                {userIsLoaded ? (
                        <div>
                            {this.fetchUserData()}
                            <FormPostAdd/>
                            <PostList/>
                        </div>
                    ) : (
                    <p>Please wait a little bit more.</p>
                    )
                }
            </div>
        );
    }
}


const mapDispatchToProps = {
    fetchUserProfile: fetchUserProfile,
    fetchUserFriends: fetchUserFriends
};

const mapStateToProps = (state) => {
    return {
        userIsLoaded: state.auth.userIsLoaded,
        userInfo: state.auth.userInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
