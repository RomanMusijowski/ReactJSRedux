import React from 'react';
import {useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {deleteEvent, joinEvent} from "../../services/eventApi";
import InviteDialog from "./InviteDialog";
import EventIcon from '@material-ui/icons/Event';

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


const EventListItem = ({id, name, description, dateTime}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleJoinEvent = (id) => {
        console.log('Clicked button');
        console.log(id);
        dispatch(joinEvent(id));
    };

    const handleDeleteEvent = (id) => {
        console.log("delete event");
        dispatch(deleteEvent(id));
        window.location.reload();
    };

    const handleInviteFriends = (id) => {
        console.log("handleInviteFriends!")
    };


    return(
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar>
                    <EventIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <React.Fragment>
                        {id}
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {description}
                        </Typography>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary">
                            {dateTime}
                        </Typography>
                    </React.Fragment>
                }
            >
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton edge="end"
                            aria-label="add"
                            onClick={()=>handleJoinEvent(id)}>
                    <PersonAddIcon/>
                </IconButton>
                <InviteDialog id={id}/>
                <IconButton edge="end"
                            aria-label="delete"
                            onClick={()=>handleDeleteEvent(id)}>

                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};
export default EventListItem