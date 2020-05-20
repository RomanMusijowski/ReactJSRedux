import {useDispatch} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {useHistory} from "react-router-dom";
import {deleteFriend} from "../../services/userApi";

const FriendDialogItem = ({friendId, username, firstName, lastName, photo, loggedInUser, loggedInUserId}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeleteFriend = (friendId) => {
        dispatch(deleteFriend(friendId, loggedInUserId))
    }

    const handleShowProfile = (friendId) => {
        history.push("/profile/" + friendId);
        window.location.reload();
    }

    const showButton = (loggedInUser, friendId) => {
        if (loggedInUser) {
            return [
                <Grid item>
                    <IconButton edge="end"
                                    aria-label="delete"
                                    onClick={()=>handleDeleteFriend(friendId)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton edge="end"
                                aria-label="check">
                        <VisibilityIcon onClick={()=>handleShowProfile(friendId)}/>
                    </IconButton>
                </Grid>
            ]
        } else {
            return [
                <IconButton edge="end"
                               aria-label="check">
                    <VisibilityIcon onClick={()=>handleShowProfile(friendId)}/>
                </IconButton>
            ]
        }
    };


    return(
        <ListItem alignItems="flex-start">
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar
                        src={photo}
                        style={{width: '100px',
                            height: '100px'}}>/>
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item md>
                            <Typography gutterBottom variant="subtitle1">
                                {username}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {firstName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {lastName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {showButton(loggedInUser, friendId)}
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default FriendDialogItem