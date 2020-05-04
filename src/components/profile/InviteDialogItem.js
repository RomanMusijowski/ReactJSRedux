import {makeStyles} from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const InviteDialogItem = ({byUser, eventId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDeleteInvite = (eventId) => {
        console.log(eventId)
        // dispatch(deleteEvent(inviteId));
        // window.location.reload();
    };

    const handleJoinInvite = (eventId) => {
        console.log(eventId)
        // dispatch(deleteEvent(inviteId));
        // window.location.reload();
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
                                aria-label="delete"
                                onClick={()=>handleJoinInvite(eventId)}>
                        <EventBusyIcon />
                    </IconButton>
                    <IconButton edge="end"
                                aria-label="delete"
                                onClick={()=>handleDeleteInvite(eventId)}>
                        <EventAvailableIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default InviteDialogItem