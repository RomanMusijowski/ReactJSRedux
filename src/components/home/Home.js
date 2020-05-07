import React, {Component} from 'react';
import {connect} from "react-redux";

import authApi from "../../services/authApi";
import {getAllPostFriends} from "../../services/postApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";


class Home extends Component {


    componentDidMount() {
        this.props.fetchLoadUser();
        this.props.getAllPostFriends();
    }

    render() {
        const {posts, username} = this.props;
        const {userIsLoaded} = this.props;

        return (
            <div>
                {userIsLoaded ? (
                        <div>
                          <FormPostAdd username={username}/>
                          <PostList posts={posts} />
                        </div>
                    ) : (
                    <p>Please wait a little bit more.</p>
                    )
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userIsLoaded: state.auth.userIsLoaded,
        username: state.auth.username,
        posts: state.post
    }
}



const mapDispatchToProps = {
    fetchLoadUser: authApi.fetchLoadUser,
    getAllPostFriends

};


export default connect(mapStateToProps, mapDispatchToProps)(Home)

