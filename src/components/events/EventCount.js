import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const EventCount = (props) => {
    return(
        <Card style={{marginTop: "15px"}}>
            <CardContent style={{
                backgroundColor: "orange", textAlign: "center"}}>

                <Typography variant={"h5"}>
                    <PeopleIcon/>
                    {props.events}
                </Typography>
                <Typography variant="h5" component="h2">
                    Events
                </Typography>
            </CardContent>
        </Card>
    )
};

export default EventCount;