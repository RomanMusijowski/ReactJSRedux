import React, {Fragment, useEffect} from 'react';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import purple from '@material-ui/core/colors/purple';
import {makeStyles} from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";
import {useDispatch, useSelector} from "react-redux";
import {addPost, getAllUserPostLiked} from "../../services/postApi";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import {putPost} from "../../services/postApi";
//import FriendDialogItem from "./FriendDialogItem";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const FromPostPutDialog = ({postId, contentt, avatar}) => {

    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(contentt);
    //console.log(postId);
    const dispatch = useDispatch();

    const username = useSelector((state) => state.auth.userInfo.username)

    //const listUserPostLiked = useSelector((state) =>  state.post);
    //console.log(listUserPostLiked);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event/*values, actions*/) => {
        event.preventDefault();

        dispatch(putPost(postId ,content));

        //setContent("");
        if(content.length > 0) {
            //window.alert("Success create post");
           // window.location.reload();
            handleClose();
            window.location.reload();
        }
        else window.alert("create post is empty");
    };

    const classes = useStyles();
    const [dense] = React.useState(false);
    /*
    const UserPostLikedList = friends.map(function (friend) {

        return <FriendDialogItem friendId={friend.id}
                                 username={friend.username}
                                 firstName={friend.firstName}
                                 lastName={friend.lastName}
                                 loggedInUser={loggedInUser}/>


    })
*/
    return(
        <Fragment>



                        <EditIcon style={{

                        }} onClick={handleClickOpen}/>



            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update your post</DialogTitle>
                <DialogContent>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {console.log([postId, contentt, username])}

                        <form onSubmit={handleSubmit}>
                            <div className="card light-green lighten-3">
                                <div className="card-content black-text">
                                    <CardHeader
                                        avatar={
                                            <Avatar alt="Carlos"
                                                    src={avatar}
                                            />



                                        }
                                        subheader={
                                            <label >{username}</label>
                                        }
                                    />



                                    <div className="row">
                                            <textarea className="materialize-textarea"
                                                      name="content"
                                                      label="Content"
                                                      value={content}
                                                      onChange={event => setContent(event.target.value)}
                                            ></textarea>
                                    </div>
                                </div>
                                <div className="card-action">
                                    <div className="row">


                                        <input className="btn light-red accent-1 right"   type="submit"
                                               value="Update" />

                                    </div>
                                </div>
                            </div>
                        </form>
                        </List>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
};

export default FromPostPutDialog