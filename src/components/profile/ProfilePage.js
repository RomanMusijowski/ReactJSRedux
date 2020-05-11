import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProfileArea from "./ProfileArea";
import ProfileWall from "./ProfileWall";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FriendsCount from "./FriendsCount";
import InviteCount from "./InviteCount";
import {fetchUserProfile} from "../../services/userApi";
import EventCount from "./EventCount";

const ProfilePage = (props) => {

    const dispatch = useDispatch();


    const userId = props.match.params.id
    const userList = useSelector((state)=> state.user);
    const userInfoId = useSelector((state) => state.auth.userInfo.id)
    const loggedInUser = Boolean(Number(userId) === Number(userInfoId))

    useEffect(() => {
        if (!loggedInUser){
            dispatch(fetchUserProfile(userId))
        }
    }, [dispatch]);

    const showProfilePage = function() {
        const user = userList[userId]
        if (user !== undefined ){
            if (user.profileLoad && user.friendsLoad && user.eventsLoad){
                return true
            }
        }else {
            return false
        }
    }

    return (
        <div>
            { (showProfilePage()) ? (
                <Container maxWidth="lg">
                    <ProfileArea username={userList[userId].username}
                                 email={userList[userId].email}
                                 firstName={userList[userId].firstName}
                                 lastName={userList[userId].lastName}
                                 phoneNumber={userList[userId].phoneNumber}
                                 gender={userList[userId].gender}
                                 loggedInUserId={userInfoId}
                                 userId={userId}
                                 friends={userList[userInfoId].friends}/>

                    <Grid container spacing={2}>
                        <Grid item
                              xs={4}
                              direction="column">
                            <FriendsCount friends={userList[userId].friends}
                                          loggedInUser={loggedInUser}
                                          loggedInUserId={userInfoId}/>
                            <EventCount events={userList[userId].events} loggedInUser={loggedInUser}/>
                            {loggedInUser ? (
                                <InviteCount invites={userList[userId].invitedEvents}/>
                            ) : (
                                <p></p>
                            )}

                        </Grid>
                        <Grid item xs={8}>
                            <ProfileWall userId={userId}/>
                        </Grid>
                    </Grid>
                </Container>
                ) : (
                    <p>The page is loading</p>
                )
            }
        </div>
    );
}

export default ProfilePage