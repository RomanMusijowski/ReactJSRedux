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
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postLike} from "../../services/postApi";
import Pagination from '@material-ui/lab/Pagination';
import ListUserPostLiked from "./ListUserPostLiked";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( {
    photo: {
        height: 300,
    },
});

const PostList = (props) => {

    const dispatch = useDispatch();

    const userList = useSelector((state) => state.user);
    //console.log(props.posts);
    console.log(userList);
    const classes = useStyles();
    var createDate, lastUpdateDate, date1, date2;

    const handlePostLike = (postId) => {
        dispatch(postLike(postId));
        window.location.reload();
    };

    return(<div>
            {props.posts && Object.keys(props.posts).map(key => (
                //console.log(props.posts[key].createdDate),
                createDate = (props.posts[key].createdDate),
                    lastUpdateDate = (props.posts[key].lastModifiedDate),
                    console.log(createDate),
                    //date1 = createDate,
                    // date2 = lastUpdateDate,

                    // date1 = createDate.split(","),
                    // date2 = lastUpdateDate.split(","),
                    <Container maxWidth="sm">

                        <Card style={{marginTop: 30,

                        }}>
                            <CardHeader
                                avatar={
                                    <Avatar alt="Carlos"
                                        // src={userList[props.posts[key].userId].photos[0].url}
                                    />

                                }

                                title={<Link to={'/profile/'+props.posts[key].userId}>{/*userList[props.posts[key].userId].username*/ props.posts[key].userId  }</Link>}



                                subheader={
                                    //console.log(Intl.DateTimeFormat('en-US').format( props.posts[key].lastModifiedDate))
                                    //console.log(date1[1]);
                                    //  "Created: "+date1[0]+"/"+date1[1]+"/"+date1[2]
                                    //   "Created: "+createDate+"/"+createDate+"/"+createDate
                                    "Created: "
                                    //<Moment date={props.posts[key].lastModifiedDate}/>
                                    //Moment(props.posts[key].lastModifiedDate).format("lll")
                                }



                            />

                            {/*<CardMedia*/}
                            {/*    className={classes.photo}*/}
                            {/*    image={Object.keys(props.posts[key].photos).map(key2 =>*/}
                            {/*        props.posts[key].photos[key2].url*/}
                            {/*    )}*/}

                            {/*/>*/}
                            <CardContent>
                                <p>{props.posts[key].content}</p>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon onClick={() => handlePostLike(props.posts[key].id)} /> {props.posts[key].likes}
                                </IconButton>


                                <IconButton
                                    aria-label="show more"
                                    //onClick={handleExpandClick}
                                >

                                    <button><Link to={'/post/'+props.posts[key].id+'/comments'}>Comments</Link></button>
                                </IconButton>
                                {/*<label>{"Last update: "+date2[0]+"/"+date2[1]+"/"+date2[2]+" --- "+date2[3]+" hour "+date2[4]+" min "+date2[5]+" sec"}</label>*/}
                            </CardActions>
                            <Container>


                            </Container>
                        </Card>

                    </Container>

            ))}

        </div>
    )
}

export default PostList;