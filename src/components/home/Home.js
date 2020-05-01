import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";

class Home extends Component {


    content(){
        if (this.props.userIdLoaded){
            return [
                <FormPostAdd/>,
                <PostList/>
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
    fetchLoadUser: userApi.fetchLoadUser,

};

const mapStateToProps = (state) => {
    return {
        userIdLoaded: state.auth.userIsLoaded,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
