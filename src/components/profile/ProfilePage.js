import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProfileArea from "./ProfileArea";
import ProfileWall from "./ProfileWall";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FriendsCount from "./FriendsCount";
import InviteCount from "./InviteCount";
import {fetchUserEvents} from "../../services/userApi";
import EventCount from "./EventCount";

class ProfilePage extends Component {

    componentDidMount() {
        this.props.fetchUserEvents(this.props.userInfoId)
    }

    render() {
        const {userIsLoaded, userInfoId, userList} = this.props;
        return (
            <div>
                { userIsLoaded ? (
                    <Container maxWidth="lg">
                        <ProfileArea username={userList[userInfoId].username}
                                     email={userList[userInfoId].email}
                                     firstName={userList[userInfoId].firstName}
                                     lastName={userList[userInfoId].lastName}
                                     phoneNumber={userList[userInfoId].phoneNumber}
                                     gender={userList[userInfoId].gender}/>

                        <Grid container spacing={2}>
                            <Grid item
                                  xs={4}
                                  direction="column">
                                <FriendsCount friends={userList[userInfoId].friends.length}/>
                                <EventCount events={userList[userInfoId].events}/>
                                <InviteCount invites={userList[userInfoId].invitedEvents}/>
                            </Grid>
                            <Grid item xs={8}>
                                <ProfileWall/>
                            </Grid>
                        </Grid>
                    </Container>
                    ) : (
                        <p>Page is loading</p>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfoId: state.auth.userInfo.id,
        userIsLoaded: state.auth.userIsLoaded,
        userList: state.user
    }
};

const mapDispatchToProps = {
    fetchUserEvents: fetchUserEvents
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProfilePage);