import React ,{Component} from "react";
import Container from "@material-ui/core/Container";
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../services/postApi";
import {Link} from "react-router-dom";
import CardHeader from '@material-ui/core/CardHeader';
import Thumb from "../events/Thumb";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {fetchLastCreatedUsers} from "../../services/userApi";

const useStyles = makeStyles((theme) => ({

    input: {
        display: 'none',
    },
}));

const FormPostAdd = (props) =>  {
    const [content, setContent] = React.useState("");
    const [file, setFile] = React.useState(null);

    const dispatch = useDispatch();
    const classes = useStyles();

    const userList = useSelector((state) => state.user);
    const userInfoId = useSelector((state) => state.auth.userInfo.id);
    const username = useSelector((state) => state.auth.userInfo.username);
    const photo = useSelector((state) => state.auth.userInfo);
    //console.log(userList[userInfoId].photos[0].url);

    const handleSubmit = (event/*values, actions*/) => {
        event.preventDefault();

        dispatch(addPost(content, file));

        setContent("");
        if(content.length > 0) {
            window.alert("Success create post");
            window.location.reload();
        }
        else window.alert("create post is empty");
    };

    //console.log(userList[userInfoId].photos[0].url)
    const showAvatar = function () {
        if (userList[userInfoId] !== undefined ){
            return [
            <Avatar alt="Carlos"
                    src={userList[userInfoId].photos[0].url}
            />
           ];
        }else {
            return [
                <Avatar alt="Carlos"
                        // src={userList[userInfoId].photos[0].url}
                />
            ];
        }

    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <div className="card light-green lighten-3">
                    <div className="card-content black-text">
                        <CardHeader
                            avatar={
                                showAvatar()




                            }

                            subheader={
                                <Link to={'/profile/'+userInfoId}>{username}</Link>
                            }
                            />



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
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={(event) => {
                                    setFile( event.currentTarget.files[0]);
                                }}/>
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload photo
                                </Button>
                            </label>
                            <Thumb file={file} />


                            <input className="btn light-red accent-1 right"   type="submit"
                                   value="Create Post" />

                        </div>
                    </div>
                </div>
            </form>
        </Container>
    );
}
export default FormPostAdd