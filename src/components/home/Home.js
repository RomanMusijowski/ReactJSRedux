import React, {Component} from 'react';
import {connect} from "react-redux";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";
import {fetchUserProfile} from "../../services/userApi";

class Home extends Component {

    fetchUserProfile() {
        this.props.fetchUserProfile(this.props.userInfo.id);
    }

    render() {
        const {userIsLoaded} = this.props;
        return (
            <div>
                {userIsLoaded ? (
                        <div>
                            {this.fetchUserProfile()}
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
};

const mapStateToProps = (state) => {
    return {
        userIsLoaded: state.auth.userIsLoaded,
        userInfo: state.auth.userInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
