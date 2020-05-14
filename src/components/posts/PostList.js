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



const PostList = (props) => {

    const dispatch = useDispatch();

    const userList = useSelector((state) => state.user);

    var date, date1;

    const handlePostLike = (postId) => {
        dispatch(postLike(postId));
        window.location.reload();
    };

        return(<div>
            {props.posts && Object.keys(props.posts).map(key => (
                date = (props.posts[key].lastModifiedDate).toString(),
                    date1 = date.split(","),
            <Container maxWidth="sm">

                <Card style={{marginTop: 30,

                    }}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" >

                            </Avatar>

                        }

                        title={<Link to={'/profile/'+props.posts[key].userId}>{props.posts[key].userId}</Link>}



                        subheader={
                            //console.log(Intl.DateTimeFormat('en-US').format( props.posts[key].lastModifiedDate))
                            //console.log(date1[1]);
                            date1[0]+"/"+date1[1]+"/"+date1[2]+" "+" --- "+date1[3]+" hour "+date1[4]+" min "+date1[5]+" sec"

                            //<Moment date={props.posts[key].lastModifiedDate}/>
                            //Moment(props.posts[key].lastModifiedDate).format("lll")
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon onClick={() => handlePostLike(props.posts[key].id)} /> {props.posts[key].likes}
                        </IconButton>
                        <IconButton
                            aria-label="show more"
                            //onClick={handleExpandClick}
                        >

                            <ListUserPostLiked postId={props.posts[key].id}/>
                        </IconButton>

                        <IconButton
                            aria-label="show more"
                            //onClick={handleExpandClick}
                        >

                            <button><Link to={'/post/'+props.posts[key].id+'/comments'}>Comments</Link></button>
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

export default PostList;