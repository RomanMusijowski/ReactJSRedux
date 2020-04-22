import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllPostFriends, getUserInfo} from "../../services/postApi";
import Posts from "./Posts";

const PostList = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getAllPostFriends())
    }, []);
/*
    const handleFetchUser = (userId) => {
      dispatch(getUserInfo(userId))
    };
*/
    const listPosts = useSelector((state) => state.post);
    //const userInfo = useSelector((state) => state.post);
    //console.log(Object.keys(listPosts));

    const item = Object.keys(listPosts).map(key =>
    <Posts id={listPosts[key].id}
           userId={listPosts[key].userId}
           content={listPosts[key].content}
           likes={listPosts[key].likes}
           //comments={listPosts[key].comments}
    />);


    return(
        <div>{item}</div>
    )
};

export default PostList