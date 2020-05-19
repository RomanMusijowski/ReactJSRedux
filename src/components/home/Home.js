import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPostFriends} from "../../services/postApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import {fetchLastCreatedUsers} from "../../services/userApi";


const Home = () => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage, setPostsPerPage] = React.useState(10);
    const userInfo = useSelector((state) => state.auth.userInfo);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllPostFriends());
        if (userInfo !== undefined && userInfo !== null){
            dispatch(fetchLastCreatedUsers(userInfo.id))
        }

    }, []);



    const userIsLoaded = useSelector((state) => state.auth.userIsLoaded);
    const posts = useSelector((state) => state.post);
    const numberPages = useSelector((state) => state.post.numberPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

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

export default Home

