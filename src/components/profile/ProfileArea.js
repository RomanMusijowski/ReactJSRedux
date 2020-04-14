import React from 'react';
import BackgroundImage from '../../images/user-profile-bg.jpg'
import AvatarImage from '../../images/avatar.jpg'
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ProfileArea = (props) => {
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
                                 {props.username}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {props.firstName} {props.lastName}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {props.phoneNumber}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {props.email}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default ProfileArea