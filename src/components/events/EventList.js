import React, {useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {fetchEventList} from "../../services/eventApi";
import EventListItem from "./EventListItem";


const EventList = (props) => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchEventList())
    }, [dispatch]);


    const listOfEvents = useSelector((state)=> state.event);
    const item = Object.keys(listOfEvents).map(key=>
        <EventListItem name={listOfEvents[key].name}
                       description={listOfEvents[key].description}
                        dateTime={listOfEvents[key].dateTime}/>);

    return (
        <Grid style={{marginTop: "15px", alignContent: "center"}}>
            {item}
        </Grid>
    )
};

export default EventList