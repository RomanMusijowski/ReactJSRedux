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
import {useDispatch} from "react-redux";
import {commentLike} from "../../services/postApi";

const Comments = ({id, userId, content, likes, postId, username }) => {

    const dispatch = useDispatch();

    const handleCommentLike = (postId, commentId) => {
        dispatch(commentLike(postId, commentId));
        window.location.reload();
    };

    return(
        <Container maxWidth="sm">
            <br/>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >

                        </Avatar>

                    }

                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }

                    subheader={

                        <Link to={'/profile/'+userId}>{username}</Link>
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
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon  onClick={() => handleCommentLike(postId,id)}/> {likes}
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        aria-label="show more"
                        //onClick={handleExpandClick}
                    >


                    </IconButton>
                </CardActions>
                <Container>


                </Container>
            </Card>


        </Container>
    )
};

export default Comments