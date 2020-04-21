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
import FolderIcon from '@material-ui/icons/Folder';
import SendIcon from '@material-ui/icons/Send';
import {inviteFriendToEvent} from "../../services/eventApi";

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


const InviteDialogItem = ({ eventId, userId, username, firstName, lastName}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleInviteFriend = (userId, eventId) => {
        dispatch(inviteFriendToEvent(userId, eventId))
    };


    return(
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={username}
                secondary={
                    <React.Fragment>

                        {eventId}
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {userId} {firstName}
                        </Typography>
                    </React.Fragment>
                }
            >
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton edge="end"
                            aria-label="add group">
                    <SendIcon onClick={() => handleInviteFriend(userId, eventId)}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};
export default InviteDialogItem