import React from "react";
import TextField from '@material-ui/core/TextField';
import {ErrorMessage, Field} from "formik";

const FormikField = ({name, label}) => {
    return(
        <div>
            <Field
            required
            as={TextField}
            label={label}
            name={name}
            fullWidth
            helperText={<ErrorMessage name={name}/>}/>
        </div>
    )
}

export default FormikField