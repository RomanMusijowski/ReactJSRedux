import React ,{Component} from "react";
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

import axios from 'axios';

import { withStyles} from "@material-ui/core/styles";


class Posts extends Component {

    state = {
        posts: [ ]
    };

    componentDidMount() {
        axios.get('http://localhost:5001/api/post')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { classes } = this.props;
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <Container maxWidth="sm">
                        <Card key={post.id}>
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
                                title={post.title}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <p>{post.body}</p>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse  timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>

                                    </Typography>
                                    <Typography paragraph>

                                    </Typography>
                                    <Typography paragraph>

                                    </Typography>
                                    <Typography>

                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                        <br/>
                    </Container>

                )
            })
        ) : (
            <div className="center">No posts yet. Add some friends</div>
        )
        return (
            <div className="center">{postList}</div>

        );
    }

}

export default withStyles({
    media: {
        minHeight: "300px"
    }
})(Posts);