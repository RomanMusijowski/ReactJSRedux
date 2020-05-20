import React, {useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {fetchEventList} from "../../services/eventApi";
import EventListItem from "./EventListItem";
import List from '@material-ui/core/List';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const EventList = (props) => {

    const dispatch = useDispatch();
    const listOfEvents = useSelector((state)=> state.event);

    useEffect(()=> {
        dispatch(fetchEventList())
    }, [dispatch]);

    const classes = useStyles();
    const [dense] = React.useState(false);
    const items = Object.keys(listOfEvents).map(key =>
        <EventListItem eventId={listOfEvents[key].id}
                       name={listOfEvents[key].name}
                       description={listOfEvents[key].description}
                       dateTime={listOfEvents[key].dateTime}
                       photo={listOfEvents[key].photos[0].url}
            />);

    return (
        <Grid item lg={12}
              md={6}
              style={{marginTop: "15px", alignContent: "center"}}
        >
            <div className={classes.demo}>
                <List dense={dense}>
                    {items}
                </List>
            </div>
        </Grid>
    )
};

export default EventList