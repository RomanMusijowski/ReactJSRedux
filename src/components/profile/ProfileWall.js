import React, {Component} from 'react';
import PostList from "../posts/PostList";
import {connect, useDispatch} from "react-redux";
import {getAllPostUser} from "../../services/userPostApi";
import {render} from "react-dom";
import UserPostList from "../posts/UserPostList";
import Pagination from '@material-ui/lab/Pagination';


class ProfileWall extends Component{

    state = {
        page: 1
    };


    componentDidMount() {

        this.props.getAllPostUser(this.props.userId, this.state.page);
    }

    handleChangePage = (e) => {
        const { page } = this.state;
        this.setState({
            page: e.target.value
        })
        //window.location.reload();
    };

    render(){
        const {posts} = this.props;
        const {page} = this.state;
        console.log(posts);
        //console.log(page);
        return (
            <div>
                <UserPostList posts={posts}/>
                <Pagination count={3} page={page} onChange={this.handleChangePage}/>
            </div>
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