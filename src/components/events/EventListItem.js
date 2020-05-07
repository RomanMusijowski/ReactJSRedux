import React from 'react';
import {useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {deleteEvent, joinEvent} from "../../services/eventApi";
import InviteDialog from "./InviteDialog";
import EventIcon from '@material-ui/icons/Event';
import Grid from '@material-ui/core/Grid';

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


const EventListItem = ({eventId, name, description, dateTime}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleJoinEvent = (eventId) => {
        console.log('Clicked button');
        console.log(eventId);
        dispatch(joinEvent(eventId));
    };

    const handleDeleteEvent = (eventId) => {
        dispatch(deleteEvent(eventId));
        window.location.reload();
    };

    const handleInviteFriends = (eventId) => {
        console.log("handleInviteFriends!")
    };


    return(
        <ListItem alignItems="flex-start">
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar>
                        <EventIcon />
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item md>
                            <Typography gutterBottom variant="subtitle1">
                                {eventId}{name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {dateTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton edge="end"
                                aria-label="add"
                                onClick={()=>handleJoinEvent(eventId)}>
                        <PersonAddIcon/>
                    </IconButton>
                    <InviteDialog eventId={eventId}/>
                </Grid>
            </Grid>
        </ListItem>
    )
};
export default EventListItem