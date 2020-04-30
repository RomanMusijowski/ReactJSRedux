import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";

class Home extends Component {

    content(){
        if (this.props.userIdLoaded){
            return [
                <p>Home</p>
            ]
        }else {
            return [
                <p>Please wait</p>
            ]
        }
    }

    render() {
        return (
            <div>
                {this.content()}
            </div>
        );
    }
}



const mapDispatchToProps = {
    fetchLoadUser: userApi.fetchLoadUser
};

const mapStateToProps = (state) => {
    return {
        userIdLoaded: state.auth.userIsLoaded,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
