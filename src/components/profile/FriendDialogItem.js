import {useDispatch} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

const FriendDialogItem = ({friendId, username, firstName, lastName}) => {
    const dispatch = useDispatch();

    const handleDeleteFriend = (friendId) => {
        console.log('delete a friend')
    };

    return(
        <ListItem alignItems="flex-start">
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar>
                        <FolderIcon />
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
                    <IconButton edge="end"
                                aria-label="delete"
                                onClick={()=>handleDeleteFriend(friendId)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default FriendDialogItem