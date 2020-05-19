import React, {useEffect, Fragment, useReducer} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllComments, commentsUnload} from "../../services/postApi";
import userApi from "../../services/userApi";
import Comments from "./Comments";
import FormComment from "./FormComment";

const CommentList = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllComments(props.match.params.id));

        return() => {
            dispatch(commentsUnload());
        }
    }, []);


    const listComments = useSelector((state) =>  state.comment);
    const userList = useSelector((state) => state.user);

    //console.log(Object.keys(listComments));

    const item = Object.keys(listComments).map(key =>
        <Comments id={listComments[key].id}
                  userId={listComments[key].userId}
                  content={listComments[key].content}
                  likes={listComments[key].likes}
                  postId={props.match.params.id}
                  createDate={listComments[key].createdDate}
                  lastModifiedDate={listComments[key].lastModifiedDate}
                  /*username={userList[listComments[key].userId].username}*/
        />
    );



    if (item.length > 0){
    return(

        <div>
            <FormComment postId={props.match.params.id} />
            {item}
        </div>


    )}
    else{
        return(
            <div >
                <FormComment postId={props.match.params.id}/>
                <h6 align="center">this post has no comments</h6>

        </div>);

    }

};

export default CommentList