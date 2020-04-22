import React, {Component, useEffect} from "react";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DialogComment from "./DialogComment";
import PostItem from "./PostItem";
import CommentList from "./CommentList";
import Comments from "./Comments";
import postApi, {getAllPostFriends} from "../../services/postApi";
import {Message} from "../messageInfo/Message";
import SendIcon from '@material-ui/icons/Send';
import { withStyles} from "@material-ui/core/styles";
import {connect, useDispatch, useSelector} from "react-redux";
import { getUserInfo} from "../../services/postApi";
import {compose} from "redux";
import UserNameInfo from "./UserNameInfo";
//const { classes } = this.props;


const Posts = ({id,userId,content,likes}) => {
    //console.log(props); // it's ok
    //console.log(props.post); // don't work
    //console.log(userId);
    //console.log(comments);
    //console.log(comments);
    //console.log(id);

/*
        if(props === null){
            return (<Message message="No posts yet. Add some friends"/>)
        }
*/
    const dispatch = useDispatch();
    /*
    console.log(userId);
    useEffect((userId) => {
        dispatch(getUserInfo(userId))
    }, [dispatch]);
    const userinfo = useSelector((state) => state.post);
    const item = Object.keys(userinfo).map(key =>
        <UserNameInfo username={userinfo[key].username}

        />);

*/


        return(
                    <Container maxWidth="sm">
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

                                subheader={userId}


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
                                    <FavoriteIcon /> {likes}
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="show more"
                                    //onClick={handleExpandClick}
                                >
                                    <CommentList postId={id}/>

                                </IconButton>
                            </CardActions>
                            <Container>


                            </Container>
                        </Card>
                        <br/>
                    </Container>
        )
}




export default (withStyles({
    media: {
        minHeight: "300px"
    }
}))(Posts);