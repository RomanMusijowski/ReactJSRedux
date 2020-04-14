import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import purple from '@material-ui/core/colors/purple';

const FriendsCount = (props) => {
    return(
        <Card style={{backgroundColor: "purple",
                marginTop: "15px",
                textAlign: "center"}}>
            <CardContent >

                <Typography variant={"h5"}>
                    <PeopleIcon/>
                    {props.friends}
                </Typography>
                <Typography variant="h5" component="h2">
                    Followers
                </Typography>
            </CardContent>
        </Card>
    )
};

export default FriendsCount