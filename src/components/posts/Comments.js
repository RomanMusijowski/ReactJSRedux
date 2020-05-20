import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {Link} from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useDispatch, useSelector} from "react-redux";
import {commentLike, deleteComment} from "../../services/postApi";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FromPostPutDialog from "./FormPostPutDialog";
import FormCommentPutDialog from "./FormCommentPutDialog";

const Comments = ({id, userId, content, likes, postId, createDate, lastModifiedDate, username, avatar }) => {

    const dispatch = useDispatch();

    //var createDate, lastUpdateDate, date1, date2;

     var   createDate = (createDate).toString();
     var   lastUpdateDate = (lastModifiedDate).toString();
     var   date1 = createDate.split(",");
     var   date2 = lastUpdateDate.split(",");

    const userInfoId = useSelector((state) => state.auth.userInfo.id)
    //console.log([createDate,lastModifiedDate])
    const handleCommentLike = (postId, commentId) => {
        dispatch(commentLike(postId, commentId));
        window.location.reload();
    };

    const handleCommentDelete = (postId, commentId) => {
        dispatch(deleteComment(postId, commentId));
        window.location.reload();
    };



    return(
        <Container maxWidth="sm">
            <br/>
            <Card >
                <CardHeader
                    avatar={
                        avatar

                    }

                    title={<Link to={'/profile/'+userId}>{username}</Link>}

                    subheader={

                        "Created: "+date1[0]+"/"+date1[1]+"/"+date1[2]
                    }


                />
                <CardMedia
                    //className={classes.media}
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <p>{content}</p>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" disabled={userId === userInfoId}>
                        <FavoriteIcon  onClick={() => handleCommentLike(postId,id)}/> {likes}
                    </IconButton>

                    <IconButton
                        aria-label="show more"
                        //onClick={handleExpandClick}
                    >


                    </IconButton>
                    <IconButton aria-label="share" disabled={userId !== userInfoId}>
                        <DeleteIcon onClick={() =>{if(window.confirm('Delete this comment ?')){handleCommentDelete(postId, id)} }}/>
                    </IconButton>
                    <IconButton aria-label="share" disabled={userId !== userInfoId}>
                        <FormCommentPutDialog postId={postId}
                                              commentId={id}
                                              contentt={content}
                                              avatar={avatar}
                        />
                    </IconButton>
                    <label>{"Last update: "+date2[0]+"/"+date2[1]+"/"+date2[2]+" --- "+date2[3]+" hour "+date2[4]+" min "+date2[5]+" sec"}</label>
                </CardActions>
                <Container>


                </Container>
            </Card>


        </Container>
    )
};

export default Comments