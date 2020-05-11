import React from 'react';
import {useDispatch} from "react-redux";
import BackgroundImage from '../../images/user-profile-bg.jpg'
import AvatarImage from '../../images/avatar.jpg'
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import IconButton from "@material-ui/core/IconButton";
import {addFriend, fetchUserProfile} from "../../services/userApi";

const ProfileArea = ({username, email, firstName, lastName,
                         phoneNumber, gender, loggedInUserId, userId, friends}) => {

    const dispatch = useDispatch();

    const handleAddFriend = (friendId) => {
        dispatch(addFriend(friendId))
        dispatch(fetchUserProfile(loggedInUserId))
    }

    const showAddFriendIcon = function () {
        const userIdNumber = parseInt(userId, 10)
        if (loggedInUserId === userIdNumber){
            return false
        }
        if (friends.filter(fr => fr.id === userIdNumber).length > 0){
            return false
        } else {
            return true
        }
    }

    return(
        <Card style={{marginTop: "15px"}}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="240"
                src={BackgroundImage}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Grid
                    container
                    direction="row"
                    spacing={2}>
                    <Grid item>
                        <Avatar alt="Carlos"
                                src={AvatarImage}
                                style={{width: '100px',
                                    height: '100px'}}/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Typography variant="body2" gutterBottom>
                                 {username}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {firstName} {lastName}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {phoneNumber}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {email}
                            </Typography>
                        </Grid>
                        {showAddFriendIcon() ? (
                            <Grid item>
                                <IconButton edge="end"
                                            aria-label="add"
                                onClick={()=> handleAddFriend(userId)}>
                                    <PersonAddIcon/>
                                </IconButton>
                            </Grid>
                        ) : (
                            <p></p>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default ProfileArea