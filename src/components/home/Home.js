import React, {Component} from 'react';
import {connect} from "react-redux";
import userApi from "../../services/userApi";
import FormPostAdd from "../../components/posts/FormPostAdd";
import Posts from "../posts/Posts";

class Home extends Component {

    componentDidMount() {
        this.props.fetchLoadUser();
    }

    render() {
        return (
            <div>
               <FormPostAdd/>
               <Posts/>

            </div>
        );
    }
}



const mapDispatchToProps = {
    fetchLoadUser: userApi.fetchLoadUser
};

export default connect(null, mapDispatchToProps)(Home)
