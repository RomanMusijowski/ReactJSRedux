import React, {useEffect, Fragment, useReducer} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllComments, commentsUnload} from "../../services/postApi";
import userApi from "../../services/userApi";
import Comments from "./Comments";
import FormComment from "./FormComment";

const CommentList = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        //userApi.fetchLoadUser()
        dispatch(getAllComments(props.match.params.id));

        return() => {
            dispatch(commentsUnload());
        }
    }, []);


    const listComments = useSelector((state) =>  state.comment);

    console.log(Object.keys(listComments));

    const item = Object.keys(listComments).map(key =>
        <Comments id={listComments[key].id}
                  userId={listComments[key].userId}
                  content={listComments[key].content}
                  likes={listComments[key].likes}
        />
    );



    if (item.length > 0){
    return(

        <div>
            <FormComment username={props.username}/>
            {item}
        </div>


    )}
    else{
        return(
            <div align="center">
                <FormComment username={props.username}/>
                <h6>this post has no comments</h6>

        </div>);

    }

};

export default CommentList