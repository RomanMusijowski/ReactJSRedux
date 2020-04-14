import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const ProfileSideBar = (props) => {
    return(

        <Card>
            <CardContent style={{ backgroundColor: "yellow", textAlign: "center"}}>
                <PeopleIcon/>
                3685
                <Typography variant="h5" component="h2">
                    Followers
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProfileSideBar