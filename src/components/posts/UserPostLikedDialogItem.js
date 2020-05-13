import {useDispatch} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {useHistory} from "react-router-dom";

const UserPostLikedDialogItem = ({userId, username}) => {

    //const dispatch = useDispatch();
    const history = useHistory();


    const handleShowProfile = (userId) => {
        history.push("/profile/" + userId);
        window.location.reload();
    }

    const showButton = (userId) => {
            return [
                <IconButton edge="end"
                            aria-label="check">
                    <VisibilityIcon onClick={()=>handleShowProfile(userId)}/>
                </IconButton>
            ]

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
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    {showButton({userId})}
                </Grid>
            </Grid>
        </ListItem>
    )
}

export default UserPostLikedDialogItem