import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";
import postApi from "../../services/postApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";
import Posts from "../posts/Posts";
import {logger} from "redux-logger/src";

class Home extends Component {

    componentDidMount() {
        this.props.fetchLoadUser();

    }

    render() {
        return (
            <div>
               <FormPostAdd username={this.props.username} />
               <PostList/>
            </div>
        );
    }
}



const mapDispatchToProps = {
    fetchLoadUser: userApi.fetchLoadUser,

};
const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
