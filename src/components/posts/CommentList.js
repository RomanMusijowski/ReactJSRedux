import React, {useEffect, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../services/postApi";
import Comments from "./Comments";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const CommentList = ({postId}) => {

    //console.log(postId);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        //const controller = new AbortController();
        dispatch(getAllComments(postId));

        //return () => controller.abort();
    }, []);

    const listComments = useSelector((state) =>  state.comment);

    console.log(Object.keys(listComments));

    const item = Object.keys(listComments).map(key =>
        <Comments id={listComments[key].id}
                  userId={listComments[key].userId}
                  content={listComments[key].content}
                  likes={listComments[key].likes}
        />
    );

    /*
    //const item = listComments.length();
    console.log(listComments);
    */
    /*
    const item = Array(listComments).map(com => {
        return(
        <Comments id={com.comments.id}
                  userId={com.userId}
                  content={com.content}
                  likes={com.likes}
        />);
    });
*/
    return(
        <Fragment>
            <Button  color="primary" onClick={handleClickOpen}>
                open comments
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Comments</DialogTitle>
                <DialogContent>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {item}
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

export default CommentList