import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import {ErrorMessage, Field} from "formik";

const FormikDateTime = ({name, label, onChange}) => {
    return(
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Field
                as={DateTimePicker}
                label={label}
                name={name}
                disablePast="true"
                onChange={val => {
                    onChange(name, val);
                }}
                minDateMessage={<ErrorMessage name={name}/>}/>
            </MuiPickersUtilsProvider>
        </div>
    )
};

export default FormikDateTime