import React from "react";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postLike, deletePost} from "../../services/postApi";
import ListUserPostLiked from "./ListUserPostLiked";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FromPostPutDialog from "./FormPostPutDialog";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( {
    photo: {
        height: 300,
    },
});


const UserPostList = (props) => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const userList = useSelector((state) => state.user);
    const userInfoId = useSelector((state) => state.auth.userInfo.id);


    var createDate, lastUpdateDate, date1, date2;

    const handlePostLike = (postId) => {
        dispatch(postLike(postId));
        window.location.reload();
    };

    const handlePostDelete = (postId, userId ) => {
            dispatch(deletePost(postId, userId));
            //window.location.reload();
    };

    return(<div>
            {props.posts && Object.keys(props.posts).map(key => (
                createDate = (props.posts[key].createdDate).toString(),
                    lastUpdateDate = (props.posts[key].lastModifiedDate).toString(),
                    date1 = createDate.split(","),
                    date2 = lastUpdateDate.split(","),
                <Container maxWidth="sm">

                    <Card style={{marginTop: 30,

                    }} >
                        <CardHeader
                            avatar={
                                <Avatar alt="Carlos"
                                        src={props.avatar}
                                        />

                            }

                            title={<Link to={'/profile/'+props.posts[key].userId}>{userList[props.posts[key].userId].username}</Link>}



                            subheader={

                                date1[0]+"/"+date1[1]+"/"+date1[2]
                            }


                        />
                        <CardMedia
                            className={classes.photo}
                            image={Object.keys(props.posts[key].photos).map(key2 =>
                                    props.posts[key].photos[key2].url
                            )}

                        />
                        <CardContent>
                            <p>{props.posts[key].content}</p>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" disabled={props.posts[key].userId === userInfoId}>
                                <FavoriteIcon onClick={() => handlePostLike(props.posts[key].id)} /> {props.posts[key].likes}
                            </IconButton>


                            <IconButton
                                aria-label="show more"
                                //onClick={handleExpandClick}
                            >

                                <button><Link to={'/post/'+props.posts[key].id+'/comments'} username={props.username}>Comments</Link></button>
                            </IconButton>
                            <IconButton aria-label="share" disabled={props.posts[key].userId !== userInfoId}>
                                <DeleteIcon onClick={() =>{if(window.confirm('Delete this post ?')){handlePostDelete(props.posts[key].id, props.userId)} }}/>
                            </IconButton>
                            <IconButton aria-label="share" disabled={props.posts[key].userId !== userInfoId}>
                                <FromPostPutDialog postId={props.posts[key].id}
                                                   contentt={props.posts[key].content}
                                                   avatar={props.avatar}
                                                   userId={props.posts[key].userId}
                                                   />
                            </IconButton>
                            <label>{"Last update: "+date2[0]+"/"+date2[1]+"/"+date2[2]+" --- "+date2[3]+":"+date2[4]}</label>
                        </CardActions>
                        <Container>


                        </Container>
                    </Card>

                </Container>

            ))}
        </div>
    )
}

export default UserPostList;