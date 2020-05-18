import React, {Component} from 'react';
import PostList from "../posts/PostList";
import {connect, useDispatch} from "react-redux";
import {getAllPostUser, userPostUnloaded} from "../../services/userPostApi";
import {render} from "react-dom";
import UserPostList from "../posts/UserPostList";
import Pagination from '@material-ui/lab/Pagination';
import Typography from "@material-ui/core/Typography";


class ProfileWall extends Component{

    state = {
        //page: 0,
        currentPage: 0
    };



    componentDidMount() {

        this.props.getAllPostUser(this.props.userId);
    }

    componentWillUnmount(){
        this.props.userPostUnloaded();
    }

    componentDidUpdate(prevProps) {
        console.log([this.props.page, prevProps.page])
        if(this.props.page !== prevProps.page){
            this.props.getAllPostUser(this.props.userId, this.props.page);
        }
    }

    getQueryParamPage() {
        return Number(this.state.currentPage) || 0;
    }


    handleChangeCurrentPage = (event, value) =>{
        console.log(value);
        this.setState({currentPage: value})
    };

    handleChangePage = (e) => {
        const { page } = this.state;
        this.setState({
            page: e.target.value
        })
        //window.location.reload();
    };

    render(){
        console.log(this.props.avatar);
        //const {currentPage} = this.state;
        const {posts, avatar} = this.props;
        //const {page} = this.state;
        //console.log(posts);
        //console.log(page);
        return (
            <div>
                <UserPostList posts={posts} avatar={avatar}/>

            </div>
        )
    }
}

const mapDispatchToProps = {
    getAllPostUser,
    userPostUnloaded

};
const mapStateToProps = (state) => ({
    posts: state.userPost
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWall)