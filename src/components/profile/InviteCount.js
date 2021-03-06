import React, {Fragment} from 'react';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import InviteDialogItem from "./InviteDialogItem";


const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

const InviteCount = ({invites, loggedInUserId}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    const [dense] = React.useState(false);
    const invitesList = invites.map(function (item) {
        return <InviteDialogItem byUser={item.byUser}
                                 eventId={item.eventId}
                                 loggedInUserId={loggedInUserId}/>
    }   )

    return(
        <Fragment>
            <Card style={{marginTop: "15px"}}>
                <CardContent style={{
                    backgroundColor: "blue", textAlign: "center"}}>

                    <Typography variant={"h5"}>
                        <PeopleIcon onClick={handleClickOpen}/>
                        {invites.length}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Invites
                    </Typography>
                </CardContent>
            </Card>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">User invites</DialogTitle>
                <DialogContent>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {invitesList}
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

export default InviteCount;