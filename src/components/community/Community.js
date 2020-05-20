import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchLastCreatedUsers} from '../../services/userApi'
import List from "@material-ui/core/List";
import PeopleItem from "./PeopleItem";
import Container from "@material-ui/core/Container";

class Community extends Component{

    componentDidMount() {
        this.props.fetchLastCreatedUsers(this.props.loggedInUserId)
    }

    render() {
        const {users} = this.props
        const {loggedInUserId} = this.props
        const userList = Object.keys(users).map(key =>
             <PeopleItem personId={users[key].id}
                         username={users[key].username}
                         firstName={users[key].firstName}
                         lastName={users[key].lastName}
                         photo={users[key].photos[0].url}
             />
        )

        return(
            <Container maxWidth="lg">
                <div >
                    <List>
                        {userList}
                    </List>
                </div>
            </Container>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        users: state.user,
        loggedInUserId: state.auth.userInfo.id
    }
}

const mapDispatchToProps = {
    fetchLastCreatedUsers: fetchLastCreatedUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Community)