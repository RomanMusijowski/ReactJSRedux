import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const InviteCount = (props) => {
    return(
        <Card style={{marginTop: "15px"}}>
            <CardContent style={{
                backgroundColor: "blue", textAlign: "center"}}>

                <Typography variant={"h5"}>
                    <PeopleIcon/>
                    {props.invites}
                </Typography>
                <Typography variant="h5" component="h2">
                    Invites
                </Typography>
            </CardContent>
        </Card>
    )
};

export default InviteCount;