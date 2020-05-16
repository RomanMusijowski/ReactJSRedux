import React, {Fragment} from "react";
import MyButton from '../../util/MyButton'
import {makeStyles} from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {editUser} from "../../services/userApi";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import CardContent from "@material-ui/core/CardContent";
import FormikField from "../../shared/components/formatik/FormikField";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Thumb from "../events/Thumb";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    input: {
        display: 'none',
    },
}));

const userSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .max(60, 'Too long')
        .required("Required"),
    firstName: Yup.string()
        .min(2, 'To short')
        .max(60, 'Too long')
        .required("Required"),
    lastName: Yup.string()
        .min(2, 'To short')
        .max(60, 'Too long')
        .required("Required"),
    phoneNumber: Yup.string()
        .length(9, 'Exactly 9 numbers')
        .required("Required"),
    gender: Yup.string()
        .min(4, 'To short')
        .max(6, 'Too long')
        .required("Required"),
    password: Yup.string()
        .min(4, 'To short')
        .max(8, 'Too long')
        .required("Required"),
    file: Yup.mixed()
        .required('Picture is required')
});


const EditUser = ({userId, email, firstName, lastName, phoneNumber, gender}) => {

    const initState = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        gender: gender,
        password: '',
        file: null
    };

    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
            setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleClose()

        dispatch(editUser(userId, values.email, values.firstName
            , values.lastName, values.phoneNumber
            , values.gender, values.password, values.file))
    }

    return (
        <Fragment>
            <MyButton
                tip="Edit Details"
                onClick={handleOpen}
                btnClassName={classes.button}
            >
                <EditIcon color="primary" />
            </MyButton>
            <Dialog open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="sm">
                <DialogTitle>Edit your details</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={initState}
                        validationSchema={userSchema}
                        onSubmit={handleSubmit}>
                        {({ values, dirty, isValid, setFieldValue }) => {
                            return(
                                <Form>
                                    <CardContent>
                                        <FormikField name="email" label="Email"/>
                                        <FormikField name="firstName" label="FirstName"/>
                                        <FormikField name="lastName" label="LastName"/>
                                        <FormikField name="phoneNumber" label="Phone number"/>
                                        <FormikField name="gender" label="Gender"/>
                                        <FormikField name="password" label="Password" type="password"/>

                                        <CardActions>
                                            <Grid
                                                justify="space-between"
                                                container
                                                spacing={24}
                                            >
                                                <Grid item>
                                                    <input
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                        onChange={(event) => {
                                                            setFieldValue("file", event.currentTarget.files[0]);
                                                        }}/>
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                            Upload
                                                        </Button>
                                                    </label>
                                                    <Thumb file={values.file} />
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="primary"
                                                                type="submit">
                                                            Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </CardContent>
                                </Form>
                            )
                        }}
                    </Formik>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}

export default EditUser