import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from "react-redux";
import InviteDialogItem from "./InviteDialogItem"
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const InviteDialog = ({id}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    const [dense] = React.useState(false);

    const listOfFriends = useSelector((state) => state.auth.userInfo.friends);
    const friends = Object.keys(listOfFriends).map(key =>
        <InviteDialogItem eventId={id}
                          userId={listOfFriends[key].id}
                          username={listOfFriends[key].username}
                          firstName={listOfFriends[key].firstName}
                          lastName={listOfFriends[key].lastName}/>
    );

    return (
        <Fragment>
            <IconButton edge="end"
                        aria-label="add group">
                <GroupAddIcon onClick={handleClickOpen}/>
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Invite a friend</DialogTitle>
                <DialogContent>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {friends}
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
    );

};

export default InviteDialog