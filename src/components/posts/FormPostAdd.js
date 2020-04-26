import React ,{Component} from "react";
import Container from "@material-ui/core/Container";
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import {addPost} from "../../services/postApi";


const FormPostAdd = (props) =>  {
    const [content, setContent] = React.useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event/*values, actions*/) => {
        event.preventDefault();

        dispatch(addPost(content));

        setContent("");
        if(content.length > 0) {
            window.alert("Success create post");
            window.location.reload();
        }
        else window.alert("create post is empty");
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <div className="card light-green lighten-3">
                    <div className="card-content black-text">
                        <Button href={"/#"}><Avatar/><label
                            className="">{props.username}</label> </Button>
                        <span className="card-title">
                                    <h8>Create post</h8>
                                 </span>
                        <div className="row">
                                            <textarea className="materialize-textarea"
                                                      name="content"
                                                      label="Content"
                                                      onChange={event => setContent(event.target.value)}
                                            ></textarea>
                        </div>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <Button href={"/#"}><Icon component={AccountCircleRoundedIcon}
                                                      color="primary"
                                                      fontSize={"large"}></Icon></Button>
                            <Button href={"/#"}><Icon component={InsertPhotoRoundedIcon} color="primary"
                                                      fontSize={"large"}></Icon></Button>
                            <input className="btn light-red accent-1 right"   type="submit"
                                   value="Submit" />

                        </div>
                    </div>
                </div>
            </form>
        </Container>
    );
}
export default FormPostAdd