import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";
import postApi from "../../services/postApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import Posts from "../posts/Posts";

class Home extends Component {

    componentDidMount() {
        this.props.fetchLoadUser();
        this.props.getAllPostFriends();
    }

    render() {
        return (
            <div>
               <FormPostAdd/>
               <Posts post={this.props.posts}/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.post.posts
    }
};

const mapDispatchToProps = {
    fetchLoadUser: userApi.fetchLoadUser,
    getAllPostFriends: postApi.getAllPostFriends

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
