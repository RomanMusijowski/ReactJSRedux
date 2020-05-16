import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";


const PeopleItem = ({personId, username, firstName, lastName
                        , photo}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowProfile = (personId) => {
        history.push("/profile/" + personId);
        // window.location.reload();
    }

    return(
        <ListItem >
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
                                {username}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {firstName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {lastName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton edge="end"
                                aria-label="check">
                        <VisibilityIcon onClick={()=>handleShowProfile(personId)}/>
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>
    )
}
export default PeopleItem