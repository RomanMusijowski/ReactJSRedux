import React, {Component} from 'react';
import EventAdd from "./EventAdd"
import EventList from "./EventList"
import Container from "@material-ui/core/Container";


class EventPage extends Component {

    render() {
        return (
            <Container maxWidth="lg">
                <EventAdd/>
                <EventList/>
            </Container>
        );
    };
}

export default EventPage