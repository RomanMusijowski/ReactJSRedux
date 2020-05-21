import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import FormikField from "../../shared/components/formatik/FormikField"
import FormikDateTime from "../../shared/components/formatik/FormikDateTime"
import {addEvent} from "../../services/eventApi";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Thumb from './Thumb'

const min = new Date();
min.setHours(min.getHours()+2);
min.toISOString().slice(0, 16).replace('T', ' ');

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const eventSchema = Yup.object().shape({
   name: Yup.string()
       .min(4, 'To short')
       .max(8, 'Too long')
       .required("Required"),
   description: Yup.string()
       .min(10, 'To short')
       .max(255, 'Too long')
       .required("Required"),
    dateTime: Yup.date().min(
        min, "Date and time have to be in the future."
    ),
    file: Yup.mixed()
        .required()
});

const EventAdd = (props) => {

    const initState = {
        name: '',
        description: '',
        dateTime: null,
        file: null
    };

    const dispatch = useDispatch();
    const classes = useStyles();
    const userInfoId = useSelector((state) => state.auth.userInfo.id)

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();

        dispatch(addEvent(
            userInfoId,
            values.name,
            values.description,
            values.dateTime.toISOString().slice(0, 16).replace('T', ' '),
            values.file))
    };

    return(
        <Card style={{marginTop: "15px", alignContent: "center"}}>
            <Formik initialValues={initState}
                    onSubmit={handleSubmit}
            validationSchema={eventSchema}>
                {({values, dirty, isValid, setFieldValue}) => {
                    return(
                        <Form>
                            <CardContent>
                                <FormikField name="name" label="Name"/>
                                <FormikField name="description" label="Description"/>
                                <FormikDateTime name="dateTime"
                                                label="DateTime"
                                                onChange={setFieldValue}/>
                            </CardContent>
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
                                                disabled={!dirty || !isValid}
                                                type="submit">
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Form>
                    )
                }}
            </Formik>
        </Card>
    )
};

export default EventAdd