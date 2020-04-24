import React ,{Component} from "react";
import Container from "@material-ui/core/Container";
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";


const FormComment = (props) =>  {
    const [content, setContent] = React.useState("");


    const dispatch = useDispatch();

    const handleSubmit = (event/*values, actions*/) => {
        event.preventDefault();

        //dispatch(addPost(content));

        setContent("");

        window.alert("Success create comment");
        window.location.reload();

    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <div className="card light-blue lighten-3">
                    <div className="card-content black-text">
                        <Button href={"/#"}><Avatar/><label
                            className="">{props.username}</label> </Button>
                        <span className="card-title">
                                    <h8>Create comment</h8>
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

                            <input className="btn light-red accent-1 right"   type="submit"
                                   value="Comment create" />

                        </div>
                    </div>
                </div>
            </form>
        </Container>
    );
}
export default FormComment