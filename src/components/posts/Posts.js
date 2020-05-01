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
import postApi from "../../services/postApi";
import {Message} from "../messageInfo/Message";
import { withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {compose} from "redux";
//const { classes } = this.props;

const Posts = ({id,content,likes}) => {
    //console.log(props); // it's ok
    //console.log(props.post); // don't work


/*
        if(props === null){
            return (<Message message="No posts yet. Add some friends"/>)
        }
*/
                return(
                    <Container maxWidth="sm">
                        <Card key={id}>
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

                                subheader="September 14, 2016"
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


}

export default (withStyles({
    media: {
        minHeight: "300px"
    }
}))(Posts);