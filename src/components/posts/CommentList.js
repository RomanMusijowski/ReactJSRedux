import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../services/postApi";
import Comments from "./Comments";


const CommentList = (props) => {

    console.log(props.idPost);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments(props.idPost))
    }, [dispatch]);

    const listComments = useSelector((state) => state.post);
    console.log(Object.keys(listComments));

    const item = Object.keys(listComments).map(key =>
        <Comments id={listComments[key].id}
                  userId={listComments[key].userId}
                  content={listComments[key].content}
                  likes={listComments[key].likes}
        />
    );

    return(
        <div>{item}</div>
    )

};

export default CommentList