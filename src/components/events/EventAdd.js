import React from "react";
import {useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import SaveIcon from '@material-ui/icons/Save';
import FormikField from "../../shared/components/formatik/FormikField"
import FormikDateTime from "../../shared/components/formatik/FormikDateTime"
import {addEvent} from "../../services/eventApi";
import Grid from "@material-ui/core/Grid";

const min = new Date();
min.setHours(min.getHours()+2);
min.toISOString().slice(0, 16).replace('T', ' ');


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
    )
});

const EventAdd = (props) => {

    const initState = {
        name: '',
        description: '',
        dateTime: null
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();

        dispatch(addEvent(
            values.name,
            values.description,
            values.dateTime.toISOString().slice(0, 16).replace('T', ' ')));
    };

    return(
        <Card style={{marginTop: "15px", alignContent: "center"}}>
            <Formik initialValues={initState}
                    onSubmit={handleSubmit}
            validationSchema={eventSchema}>
                {({dirty, isValid, setFieldValue}) => {
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
                                    <Button variant="contained"
                                            color="primary"
                                            startIcon={<SaveIcon />}>
                                        Upload pictures
                                    </Button>
                                    <Button variant="contained" color="primary"
                                            disabled={!dirty || !isValid}
                                            type="submit">
                                        Save
                                    </Button>
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