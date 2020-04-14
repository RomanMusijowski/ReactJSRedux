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
                <ProfileArea/>

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ProfileSideBar/>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileWall/>
                    </Grid>
                </Grid>
            </Container>


            //         <div id="profile-page" className="section">
            //             <ProfileArea
            //                     username={this.props.userInfo.username}
            //                     email={this.props.userInfo.email}
            //                     firstName={this.props.userInfo.firstName}
            //                         lastName={this.props.userInfo.lastName}
            //                         phoneNumber={this.props.userInfo.phoneNumber}
            //                         gender={this.props.userInfo.gender}
            //             />
            //
            //             <div id="profile-page-content" className="row">
            //                 <div id="profile-page-sidebar" className="col s12 m4">
            //                     <ProfileSideBar/>
            //                 </div>
            //
            //
            //                 <div id="profile-page-wall" className="col s12 m8">
            //                     <ProfileWall/>
            //                 </div>
            //             </div>
            //         </div>
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