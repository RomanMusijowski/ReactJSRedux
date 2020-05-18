import React, {Component, useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";

import authApi from "../../services/authApi";
import {commentsUnload, getAllComments, getAllPostFriends, postsFriendsUnload} from "../../services/postApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import {fetchLastCreatedUsers} from "../../services/userApi";


const Home = () => {

/*
    componentDidMount() {
        //this.props.fetchLoadUser();
        this.props.getAllPostFriends();
    }

    componentWillUnmount() {
        this.props.postsFriendsUnload();
    }
*/


    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage, setPostsPerPage] = React.useState(10);
    //const [postss, setPosts] =  React.useState([]);
    const userInfo = useSelector((state) => state.auth.userInfo);

    //console.log(users)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllPostFriends());
        if (userInfo !== undefined){dispatch(fetchLastCreatedUsers(userInfo.id))}

    }, []);



    const userIsLoaded = useSelector((state) => state.auth.userIsLoaded);
    const posts = useSelector((state) => state.post);
    const numberPages = useSelector((state) => state.post.numberPage);
    //console.log(posts);
    //console.log(numberPages);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

        return (
            <div>
                {userIsLoaded ? (
                        <div>

                          <FormPostAdd />
                          <PostList posts={posts} />
                            <Container maxWidth="sm">
                                <Pagination  count={3} page={1}   />
                            </Container>
                        </div>
                    ) : (
                    <p>Please wait a little bit more.</p>
                    )
                }

            </div>
        );
    }

/*
const mapStateToProps = (state) => {
    return {
        userIsLoaded: state.auth.userIsLoaded,
        username: state.auth.username,
        posts: state.post
    }
}



const mapDispatchToProps = {
    fetchLoadUser: authApi.fetchLoadUser,
    getAllPostFriends,
    postsFriendsUnload

};
*/

export default Home

