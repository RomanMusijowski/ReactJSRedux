import React, {Component} from 'react';
import PostList from "../posts/PostList";
import {connect, useDispatch} from "react-redux";
import {getAllPostUser} from "../../services/userPostApi";
import {render} from "react-dom";


class ProfileWall extends Component{

    componentDidMount() {

        this.props.getAllPostUser(this.props.userId);
    }

    render(){
        const {posts} = this.props;
        console.log(posts);
        return (

                <PostList posts={posts}/>

        )
    }
}

const mapDispatchToProps = {
    getAllPostUser

};
const mapStateToProps = (state) => ({
    posts: state.userPost
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWall)