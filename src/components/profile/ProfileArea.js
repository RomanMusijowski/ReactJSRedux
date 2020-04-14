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
        <Card>
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
                            <Typography gutterBottom variant="subtitle1">
                                 First name last name
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Second
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Third
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

                //     {/*<h3> Email is: {props.username}</h3>*/}
                //     {/*<h4> Username is: {props.email}</h4>*/}
                //     {/*<h4> Email is: {props.firstName}</h4>*/}
                //     {/*<h4> Email is: {props.lastName}</h4>*/}
                //     {/*<h4> Email is: {props.phoneNumber}</h4>*/}
                //     {/*<h4> Email is: {props.gender}</h4>*/}
    )
};

export default ProfileArea