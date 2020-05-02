import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProfileArea from "./ProfileArea";
import ProfileWall from "./ProfileWall";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FriendsCount from "./FriendsCount";
import InviteCount from "../events/InviteCount";
import {fetchUserFriends} from "../../services/userApi";

class ProfilePage extends Component {

    componentDidMount() {
        this.props.fetchUserFriends(this.props.userInfo.id)
    }

    render() {
        const {userIsLoaded, userInfo, userList} = this.props;
        return (
            <div>
                { userIsLoaded ? (
                    <Container maxWidth="lg">
                        <ProfileArea username={userInfo.username}
                                     email={userInfo.email}
                                     firstName={userInfo.firstName}
                                     lastName={userInfo.lastName}
                                     phoneNumber={userInfo.phoneNumber}
                                     gender={userInfo.gender}/>

                        <Grid container spacing={2}>
                            <Grid item
                                  xs={4}
                                  direction="column">
                                <FriendsCount friends={userList[userInfo.id].friends.length}/>

                                {/*<EventCount events={userInfo.invitedEvents !== null ?*/}
                                {/*    userInfo.invitedEvents :*/}
                                {/*    '0'}/>*/}

                                <InviteCount invites={userInfo.invitedEvents !== null ?
                                    userInfo.invitedEvents :
                                    '0'}/>
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
        userInfo: state.auth.userInfo,
        userIsLoaded: state.auth.userIsLoaded,
        userList: state.user
    }
};

const mapDispatchToProps = {
    fetchUserFriends: fetchUserFriends
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProfilePage);