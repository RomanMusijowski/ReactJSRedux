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
    var createDate = [], lastUpdateDate = [], date1, date2;

    const handlePostLike = (postId) => {
        dispatch(postLike(postId));
        window.location.reload();
    };

    const showAvatar = function (key) {
        if (userList[key] !== undefined ){
            return [
                <Avatar alt="Carlos"
                        src={userList[key].photos[0].url}
                />
            ];
        }else {
            return [
                <Avatar alt="Carlos"
                    // src={userList[userInfoId].photos[0].url}
                />
            ];
        }

    }

    const showUsername = function (key) {
        if (userList[key] !== undefined ){
            return [
                userList[key ].username
            ];
        }else {
            return [

            ];
        }

    }

    return(<div>
            {props.posts && props.posts.map(key => (
                console.log(key.createdDate),
                    createDate = (key.createdDate),
                    lastUpdateDate = (key.lastModifiedDate),


                    <Container maxWidth="sm">

                        <Card style={{marginTop: 30,

                        }}>
                            <CardHeader
                                avatar={
                                    showAvatar(key.userId)

                                }

                                title={<Link to={'/profile/'+key.userId}>{ showUsername(key.userId) }</Link>}



                                subheader={
                                    //console.log(Intl.DateTimeFormat('en-US').format( props.posts[key].lastModifiedDate))
                                    //console.log(date1[1]);
                                      "Created: "+createDate[0]+"/"+createDate[1]+"/"+createDate[2]
                                    //   "Created: "+createDate+"/"+createDate+"/"+createDate
                                    // "Created: "
                                    //<Moment date={props.posts[key].lastModifiedDate}/>
                                    //Moment(props.posts[key].lastModifiedDate).format("lll")
                                }



                            />

                            <CardMedia
                                className={classes.photo}
                                // image={Object.keys(props.posts[key].photos).map(key2 =>
                                //     props.posts[key].photos[key2].url
                                // )}
                                // image={photoView(key.photos)}
                                image={(key.photos).map(key2 =>
                                        key2.url
                                )}

                            />
                            <CardContent>
                               <p>{key.content}</p>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon onClick={() => handlePostLike(key.id)} /> {key.likes}
                                </IconButton>


                                <IconButton
                                    aria-label="show more"
                                    //onClick={handleExpandClick}
                                >

                                    <button><Link to={'/post/'+key.id+'/comments'}>Comments</Link></button>
                                </IconButton>
                                <label>{"Last update: "+lastUpdateDate[0]+"/"+lastUpdateDate[1]+"/"+lastUpdateDate[2]+" --- "+lastUpdateDate[3]+" hour "+lastUpdateDate[4]+" min "+lastUpdateDate[5]+" sec"}</label>
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