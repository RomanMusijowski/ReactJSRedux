import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";
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


        return (
            <div>
                <FormPostAdd username={username}/>
                <PostList posts={posts} username={username}/>

            </div>
        );
    }
}



const mapDispatchToProps = {
    fetchLoadUser: userApi.fetchLoadUser,
    getAllPostFriends

};
const mapStateToProps = (state) => ({
        username: state.auth.username,
        posts: state.post
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
