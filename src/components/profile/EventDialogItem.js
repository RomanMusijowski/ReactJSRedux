import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteEvent} from "../../services/eventApi";
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

const EventDialogItem = ({eventId, name, description, dateTime}) => {
    const dispatch = useDispatch();

    const handleDeleteEvent = (eventId) => {
        dispatch(deleteEvent(eventId));
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
                                {name}
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
                                aria-label="delete"
                                onClick={()=>handleDeleteEvent(eventId)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default EventDialogItem