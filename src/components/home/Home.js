import React, {Component} from 'react';
import {connect} from "react-redux";
import FormPostAdd from "../../components/posts/FormPostAdd";
import PostList from "../../components/posts/PostList";

class Home extends Component {

    render() {
        const {userIsLoaded} = this.props;
        return (
            <div>
                {userIsLoaded ? (
                        <div>
                            <FormPostAdd/>
                            <PostList/>
                        </div>
                    ) : (
                    <p>Please wait a little bit more.</p>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userIsLoaded: state.auth.userIsLoaded,
    }
}

export default connect(mapStateToProps)(Home)
