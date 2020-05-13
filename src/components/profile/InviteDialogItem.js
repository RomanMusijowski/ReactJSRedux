import {useDispatch, useSelector} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import React, {useEffect} from "react";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import {acceptInvite, deleteInvite, fetchUserProfile} from "../../services/userApi";
import {fetchEventList} from "../../services/eventApi";


const InviteDialogItem = ({byUser, eventId, loggedInUserId}) => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchEventList())
        dispatch(fetchUserProfile(byUser))
    }, [dispatch]);
    const listOfEvents = useSelector((state)=> state.event)
    const listOfUsers = useSelector((state)=> state.user)

    const handleDeleteInvite = (eventId, userId) => {
        dispatch(deleteInvite(eventId, userId));
    };

    const handleJoinInvite = (eventId, userId) => {
        dispatch(acceptInvite(eventId, userId, ));
    };

    const showInvites = function () {
        const user = listOfUsers[byUser]
        const event = listOfEvents[eventId]
        if (user === undefined || event === undefined){
            return false;
        } else {
            return true;
        }
    }

    return(
        <ListItem alignItems="flex-start">
            {showInvites() ? (
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar>
                        <img src={listOfEvents[eventId].photos[0].url}/>
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item md>
                            <Typography variant="button" display="block" gutterBottom>
                                {listOfUsers[byUser].firstName} {listOfUsers[byUser].lastName}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {listOfEvents[eventId].name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {listOfEvents[eventId].description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {listOfEvents[eventId].dateTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton edge="end"
                                aria-label="join"
                                onClick={()=>handleJoinInvite(eventId, loggedInUserId)}>
                        <EventAvailableIcon />
                    </IconButton>
                    <IconButton edge="end"
                                aria-label="delete"
                                onClick={()=>handleDeleteInvite(eventId, loggedInUserId)}>
                        <EventBusyIcon />
                    </IconButton>
                </Grid>
            </Grid>
            ) : (
                <p>Page is loading</p>
            )}
        </ListItem>
    )
}

export default InviteDialogItem