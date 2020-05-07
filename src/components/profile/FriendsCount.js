import React, {Fragment} from 'react';
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
import FriendDialogItem from "./FriendDialogItem";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const FriendsCount = ({friends, loggedInUser}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    const [dense] = React.useState(false);
    const friendsList = friends.map(function (friend) {
        return <FriendDialogItem friendId={friend.id}
                                 username={friend.username}
                                 firstName={friend.firstName}
                                 lastName={friend.lastName}
                                 loggedInUser={loggedInUser}/>
    })

    return(
        <Fragment>
            <Card style={{backgroundColor: "purple",
                    marginTop: "15px",
                    textAlign: "center"}}>
                <CardContent >

                    <Typography variant={"h5"}>
                        <PeopleIcon onClick={handleClickOpen}/>
                        {friends.length}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Followers
                    </Typography>
                </CardContent>
            </Card>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">User followers</DialogTitle>
                <DialogContent>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {friendsList}
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

export default FriendsCount