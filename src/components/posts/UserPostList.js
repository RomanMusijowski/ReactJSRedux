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




const UserPostList = (props) => {

    const dispatch = useDispatch();

    const userList = useSelector((state) => state.user);
    const userInfoId = useSelector((state) => state.auth.userInfo.id);

    var date, date1;

    const handlePostLike = (postId) => {
        dispatch(postLike(postId));
        window.location.reload();
    };

    const handlePostDelete = (postId) => {
            dispatch(deletePost(postId));
            window.location.reload();
    };

    return(<div>
            {props.posts && Object.keys(props.posts).map(key => (
                date = (props.posts[key].lastModifiedDate).toString(),
                    date1 = date.split(","),
                <Container maxWidth="sm">

                    <Card style={{marginTop: 30,

                    }} >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" >

                                </Avatar>

                            }

                            title={<Link to={'/profile/'+props.posts[key].userId}>{userList[props.posts[key].userId].username}</Link>}



                            subheader={

                                date1[0]+" Year "+date1[1]+" Month "+date1[2]+" Day, "+"Time: "+date1[3]+" hour "+date1[4]+" min"
                            }


                        />
                        <CardMedia
                            //className={classes.media}
                            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <p>{props.posts[key].content}</p>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" disabled={props.posts[key].userId === userInfoId}>
                                <FavoriteIcon onClick={() => handlePostLike(props.posts[key].id)} /> {props.posts[key].likes}
                            </IconButton>

                            <ListUserPostLiked postId={props.posts[key].id}/>
                            <IconButton
                                aria-label="show more"
                                //onClick={handleExpandClick}
                            >

                                <button><Link to={'/post/'+props.posts[key].id+'/comments'} username={props.username}>Comments</Link></button>
                            </IconButton>
                            <IconButton aria-label="share" disabled={props.posts[key].userId !== userInfoId}>
                                <DeleteIcon onClick={() =>{if(window.confirm('Delete this post ?')){handlePostDelete(props.posts[key].id)} }}/>
                            </IconButton>
                            <IconButton aria-label="share" disabled={props.posts[key].userId !== userInfoId}>
                                <FromPostPutDialog postId={props.posts[key].id}
                                                   contentt={props.posts[key].content}
                                                   />
                            </IconButton>
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