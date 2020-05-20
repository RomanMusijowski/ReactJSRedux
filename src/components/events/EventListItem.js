import React from 'react';
import {useDispatch} from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {joinEvent} from "../../services/eventApi";
import InviteDialog from "./InviteDialog";
import Grid from '@material-ui/core/Grid';

const EventListItem = ({eventId, name, description, dateTime, photo}) => {
    const dispatch = useDispatch();

    const handleJoinEvent = (eventId) => {
        dispatch(joinEvent(eventId));
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