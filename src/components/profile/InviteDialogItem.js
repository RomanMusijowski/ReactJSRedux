import {useDispatch} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import {acceptInvite, deleteInvite} from "../../services/userApi";


const InviteDialogItem = ({byUser, eventId, loggedInUserId}) => {
    const dispatch = useDispatch();

    const handleDeleteInvite = (eventId, userId) => {
        dispatch(deleteInvite(eventId, userId));
    };

    const handleJoinInvite = (eventId, userId) => {
        dispatch(acceptInvite(eventId, userId, ));
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
                                {byUser}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {eventId}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton edge="end"
                                aria-label="join"
                                onClick={()=>handleJoinInvite(eventId, loggedInUserId)}>
                        <EventBusyIcon />
                    </IconButton>
                    <IconButton edge="end"
                                aria-label="delete"
                                onClick={()=>handleDeleteInvite(eventId, loggedInUserId)}>
                        <EventAvailableIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default InviteDialogItem