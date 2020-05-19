import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPostFriends} from "../../services/postApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";
//import Pagination from "@material-ui/lab/Pagination";
import Pagination from "../posts/Pagination";
import Container from "@material-ui/core/Container";
import {fetchLastCreatedUsers} from "../../services/userApi";


const Home = () => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(2);
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
    console.log(Object.values(posts));
    const postss = Object.values(posts);
    const numberPages = useSelector((state) => state.post.numberPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postss.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <div>
                {userIsLoaded ? (
                        <div>

                          <FormPostAdd />
                          <PostList posts={currentPosts} />
                            <Container maxWidth="sm">
                                <Pagination postsPerPage={postsPerPage}
                                            totalPosts={numberPages}
                                            paginate={paginate}/>

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

