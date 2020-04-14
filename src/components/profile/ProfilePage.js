import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProfileArea from "./ProfileArea";
import ProfileSideBar from "./ProfileSideBar";
import ProfileWall from "./ProfileWall";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class ProfilePage extends Component {


    render() {

        const { classes } = this.props;

        return (
            <Container maxWidth="lg">
                <ProfileArea username={this.props.userInfo.username}
                             email={this.props.userInfo.email}
                             firstName={this.props.userInfo.firstName}
                             lastName={this.props.userInfo.lastName}
                             phoneNumber={this.props.userInfo.phoneNumber}
                             gender={this.props.userInfo.gender}/>

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ProfileSideBar friends={this.props.userInfo.friends.length}/>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileWall/>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo
    }
};

export default connect(
    mapStateToProps
)(ProfilePage);