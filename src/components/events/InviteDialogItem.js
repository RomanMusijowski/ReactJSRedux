import React from 'react';
import {useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import SendIcon from '@material-ui/icons/Send';
import {inviteFriendToEvent} from "../../services/eventApi";
import Grid from "@material-ui/core/Grid";

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
            <Grid container spacing={2}>
                <Grid item>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item md>
                            <Typography gutterBottom variant="body2">
                                {username}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {firstName} {lastName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton edge="end"
                                aria-label="add group">
                        <SendIcon onClick={() => handleInviteFriend(userId, eventId)}/>
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    )
};
export default InviteDialogItem