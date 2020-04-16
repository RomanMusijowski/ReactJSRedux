import React, {Component} from 'react';
import EventAdd from "./EventAdd"
import Container from "@material-ui/core/Container";


class EventPage extends Component {

    render() {
        return (
            <Container maxWidth="lg">
                <EventAdd/>
            </Container>
        );
    };
};

export default EventPage